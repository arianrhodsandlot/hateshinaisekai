define(['_'], function (_) {
  var up = _.partial(_.map, _, _.partial(_.add, 12))
  var gen = function () {
    var notes = _.toArray(arguments)
    var notes1 = up(notes)
    var notes2 = up(notes1)
    var notes3 = up(notes2)
    var notes4 = up(notes3)
    return notes
      .concat(notes1)
      .concat(notes2)
      .concat(notes3)
      .concat([_.first(notes4)])
      .concat(notes3.reverse())
      .concat(notes2.reverse())
      .concat(notes1.reverse())
      .concat(_.tail(notes).reverse())
  }

  var notes = gen(-21, -19, -17, -14)
    .concat(gen(-24, -22, -21, -17))
    .concat(gen(-21, -19, -17, -14))
    .concat(gen(-24, -22, -21, -17))
    .concat(gen(-24, -21, -16, -14))
    .concat(gen(-22, -19, -14, -12))
    .concat(gen(-25, -21, -18, -14))
    .concat(gen(-23, -19, -16, -12))

  notes = notes.concat(notes)

  return {
    name: 'square1',
    waveform: 'square',
    config: {
      instrument:{
        sampleRate: 44100,
        bpm: 400
      },
      audio: {
        volume: 0.2,
      }
    },
    notes: notes
  }
})