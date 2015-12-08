define(['_'], function (_) {
  var prelude = [
    -26, -26, -26, -26, -26, -26, -26, -26,
    -28, -28, -28, -28, -28, -28, -28, -28,
    -26, -26, -26, -26, -26, -26, -26, -26,
    -19, -19, -19, -19, -19, -19, -19, -19,

    -26, -26, -26, -26, -26, -26, -26, -26,
    -28, -28, -28, -28, -28, -28, -28, -28,
    -26, -26, -26, -26, -26, -26, -26, -26,
    -19, -19, -21, -21, -22, -22, -2, -2
  ]

  var overtune = [
    -18, -18, -18, -18,
    -18, -18, -18, -18,
    -18, -18, -18, -18,
    [-13, 2], [-15, 2],
    -18, -18, -18, -18,
    -18, -18, -18, -18,
    -18, -18, -18, -18,
    [-13, 2], [-15, 2],
    -18, -18, -18, -18,
    -18, -18, -18, -18,
    -18, -18, -18, -18,
    [-13, 2], [-15, 2],

    [-30, 0.5], [-30, 0.5], null, null, [-27, 0.5], [-27, 0.5], null, null, [-25, 0.5], [-25, 0.5], null, null,
    [-23, 0.5], [null, 0.5], [-23, 0.5], [-23, 0.5], [-23, 0.5], [-23, 0.5], [-23, 0.5], [null, 1.5], [-23, 2],
  ]

  var verse = _.flatten(_.map(_.times(6), _.constant([
    -18, [-18, 0.5], [-18, 0.5],
    -18, [-18, 0.5], [-18, 0.5],
    -20, [-20, 0.5], [-20, 0.5],
    -20, [-20, 0.5], [-20, 0.5],
    -22, [-22, 0.5], [-22, 0.5],
    -22, [-22, 0.5], [-22, 0.5],
    -20, [-20, 0.5], [-20, 0.5],
    -20, [-20, 0.5], [-20, 0.5]
  ])))

  var chorus = [
    -18, -18, -18, -18, -18, -18, -18, -18,
    -18, -18, -18, -18, -20, -20, -20, -20,
    -18, -18, -18, -18, -18, -18, -18, -18,
    -18, -18, -18, -18, -20, -20, -20, -20,

    -22, -22, -22, -22, -20, -20, -20, -20,
    -27, -27, -27, -27, -20, -20, -20, -20,
    -22, -22, -22, -22, -20, -20, -20, -20,
    [-23, 1], [null, 2.5], [-23, 0.5], [-23, 0.5],
    [-23, 0.5], [null, 1.5], [-23, 2]
  ]

  var main = overtune
    .concat(verse)
    .concat(chorus)

  var notes = prelude
    .concat(main)
    .concat(main)

  return {
    id: _.uniqueId(),
    name: 'triangle',
    config: {
      instrument:{
        sampleRate: 44100,
        bpm: 300,
        fadeOut: {
          from: 0.8,
          to: 1
        }
      },
      audio: {
        volume: 0.2,
      }
    },
    notes: notes,
    waveform: 'triangle'
  }
})