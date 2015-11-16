window.requirejs.config({
  paths: {
    _: 'https://cdn.jsdelivr.net/lodash/3.10.1/lodash.min'
  }
})(

  ['_', '../../assets/instrument', '../../assets/init-track', 'channels/square1'],

  function (_, Instrument, initTrack, square1) {
    var sampleRate = 44100
    var bpm = 250

    var sawtooth = Instrument('sawtooth').getWaveform()

    var instruments = [
      Instrument(_.compose(
        function (y) {
          return y > 255 * 0.75 ? y : 0
        },
        Math.round,
        sawtooth
      ))
        .set('sampleRate', sampleRate)
        .set('bpm', bpm)
        .set('volume', 0.1)
        .perform(square1)
    ]

    initTrack(instruments)
  }
)