window.requirejs.config({
  paths: {
    RIFFWAVE: 'http://codebase.es/riffwave/riffwave'
  },
  shim: {
    RIFFWAVE: {
      exports: 'RIFFWAVE'
    }
  }
})

window.define(['_', 'RIFFWAVE'], function (_, RIFFWAVE) {
  var Instrument = function (type) {
    var instrument = this.constructor === Instrument
      ? this
      : new Instrument(type)

    return _.assign(instrument, {
      type: type,
      options: {
        sampleRate: 44100,
        bpm: 120,
        volume: 0.5,
        loop: false,
        autoplay: false,
        waveEndsBy: 0.95
      }
    })
  }

  _.assign(Instrument.prototype, {
    baseFrequency: 440,

    getWaveform: function () {
      var sampleRate = this.options.sampleRate

      var waveforms = {
        sine: function (frequency, x) {
          return 128 - 127 * Math.sin((x - frequency / sampleRate / 4) * 2 * Math.PI * frequency / sampleRate)
        },
        square: function (frequency, x) {
          return 128 - 127 * Math.round(Math.sin(x * 2 * Math.PI * frequency / sampleRate))
        },
        sawtooth: function (frequency, x) {
          return 255 * (x % Math.round(sampleRate / frequency)) / Math.round(sampleRate / frequency)
        },
        noise: _.partial(_.random, 0, 255)
      }
      waveforms.triangle = _.compose(
        function (y) {
          return (y < 255 / 2) ? y * 2 : (255 - y) * 2
        },
        Math.round,
        waveforms.sawtooth
      )
      waveforms.pulse = _.compose(
        function (y) {
          return y > 254 ? y : 0
        },
        Math.round,
        waveforms.square
      )

      return _.isFunction(this.type)
        ? this.type
        : _.get(waveforms, this.type) || waveforms.noise
    },

    get: function (key) {
      return _.get(this, key)
    },

    getAudio: function () {
      return _.get(this, 'audio')
    },

    set: function () {
      var options = _.isString(_.first(arguments))
        ? _.set({}, _.first(arguments), _.last(arguments))
        : _.first(arguments)
      _.assign(this.options, options)
      return this
    },

    enable: function (option) {
      return this.set(option, true)
    },

    disable: function (option) {
      return this.set(option, false)
    },

    effect: function (effect) {
      var effectFunction
      var that = this

      if (_.isArray(effect)) {
        _.forEach(effect, function (effect) {
          that.effect(effect)
        })
      }

      if (_.isFunction(effect)) {
        this.audio.addEventListener('timeupdate', _.bind(effect, this), false)
      }

      if (_.isString(effect)) {
        switch (effect) {
          case 'fadeOut':
            effectFunction = function () {
              var volume = this.options.volume
              var remain = this.audio.duration - this.audio.currentTime
              var mutePoint = 2
              var muteTime = 5

              this.audio.volume = remain < mutePoint + muteTime
                ? _.max([
                  volume * (remain - mutePoint) / muteTime,
                  0
                ])
                : volume
            }
            break
        }

        this.effect(effectFunction)
      }

      return this
    },

    createWave: function (data) {
      _.assign(this, {
        riffwave: new RIFFWAVE(),
        audio: new window.Audio()
      })

      this.riffwave.header.sampleRate = this.options.sampleRate
      this.riffwave.Make(data)

      return _.assign(this.audio, {
        src: this.riffwave.dataURI,
        controls: true,
        loop: this.options.loop,
        volume: this.options.volume,
        autoplay: this.options.autoplay
      })
    },

    // yield A440 when input 0, yield a#(C4) when input is 1, etc
    perform: function (notes) {
      var that = this
      var baseTime = this.options.sampleRate * 60 / this.options.bpm
      var getMoments = _.memoize(function (note) {
        if (_.isNumber(note)) {
          note = [note, 1]
        }
        var length = _.last(note) || 1
        var time = length * baseTime
        return _.range(0, time)
      })

      var processWaveform = function (note) {
        if (!_.isArray(note)) {
          note = [note, 1]
        }

        if (_.isNull(note[0])) {
          return _.constant(0)
        }

        var waveform = that.getWaveform()
        var number = _.first(note)
        var frequency = that.baseFrequency * Math.pow(2, number / 12)

        return _.partial(waveform, frequency)
      }

      var data = _(notes)
        .map(_.memoize(function (note) {
          var moments = getMoments(note)
          var f = _.compose(Math.round, processWaveform(note))
          return _.map(moments, function (x) {
            return moments.length - x >= baseTime * (1 - that.options.waveEndsBy) ? f(x) : f(x) * (moments.length - x) / moments.length
          })
        }))
        .flatten()
        .value()

      this.createWave(data)

      return this
    },

    play: function () {
      this.audio.play()
      return this
    },

    pause: function () {
      this.audio.pause()
      return this
    },

    stop: function () {
      this.pause().audio.currentTime = 0
      return this
    }

  })

  return Instrument
})
