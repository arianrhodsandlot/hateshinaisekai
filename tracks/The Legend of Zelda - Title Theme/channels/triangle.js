define(['_'], function (_) {
  var prelude = [
    [-23, 2], [-16, 2], [-11, 4],
    [-25, 2], [-18, 2], [-13, 4],
    [-27, 2], [-20, 2], [-15, 4],
    [-28, 2], [-21, 2], [-16, 4]
  ]

  var overtune = [
    -23, [-23, 1 / 2], [-23, 1 / 2],
    -23, [-23, 1 / 2], [-23, 1 / 2],
    -23, [-23, 1 / 2], [-23, 1 / 2],
    -23, [-23, 1 / 2], [-23, 1 / 2],

    -23, [-23, 1 / 2], [-23, 1 / 2],
    -23, [-23, 1 / 2], [-23, 1 / 2],
    -23, [-23, 1 / 2], [-23, 1 / 2],
    -23, [-23, 1 / 2], [-23, 1 / 2],

    -23, [-23, 1 / 2], [-23, 1 / 2],
    -23, [-23, 1 / 2], [-23, 1 / 2],
    -23, [-23, 1 / 2], [-23, 1 / 2],
    -23, [-23, 1 / 2], [-23, 1 / 2],

    -25, [-25, 1 / 2], [-25, 1 / 2],
    -25, [-25, 1 / 2], [-25, 1 / 2],
    -25, [-25, 1 / 2], [-25, 1 / 2],
    -25, [-25, 1 / 2], [-25, 1 / 2],

    -27, [-27, 1 / 2], [-27, 1 / 2],
    -27, [-27, 1 / 2], [-27, 1 / 2],
    -27, [-27, 1 / 2], [-27, 1 / 2],
    -27, [-27, 1 / 2], [-27, 1 / 2],

    -28, [-28, 1 / 2], [-28, 1 / 2],
    -28, [-28, 1 / 2], [-28, 1 / 2],
    -28, [-28, 1 / 2], [-28, 1 / 2],
    -28, [-28, 1 / 2], [-28, 1 / 2],

    -23, [-23, 1 / 2], [-23, 1 / 2],
    -23, [-23, 1 / 2], [-23, 1 / 2],
    -23, [-23, 1 / 2], [-23, 1 / 2],
    -23, [-23, 1 / 2], [-23, 1 / 2],

    -25, [-25, 1 / 2], [-25, 1 / 2],
    -25, [-25, 1 / 2], [-25, 1 / 2],
    -25, [-25, 1 / 2], [-25, 1 / 2],
    -25, [-25, 1 / 2], [-25, 1 / 2]
  ]

  var verse = [
    -27, [-27, 1 / 2], [-27, 1 / 2],
    -27, [-27, 1 / 2], [-27, 1 / 2],
    -27, [-27, 1 / 2], [-27, 1 / 2],
    -27, [-27, 1 / 2], [-27, 1 / 2],

    -20, [-20, 1 / 2], [-20, 1 / 2],
    -20, [-20, 1 / 2], [-20, 1 / 2],
    -20, [-20, 1 / 2], [-20, 1 / 2],
    -20, [-20, 1 / 2], [-20, 1 / 2],

    -22, [-22, 1 / 2], [-22, 1 / 2],
    -22, [-22, 1 / 2], [-22, 1 / 2],
    -22, [-22, 1 / 2], [-22, 1 / 2],
    -22, [-22, 1 / 2], [-22, 1 / 2],

    -23, [-23, 1 / 2], [-23, 1 / 2],
    -23, [-23, 1 / 2], [-23, 1 / 2],
    -23, [-23, 1 / 2], [-23, 1 / 2],
    -23, [-23, 1 / 2], [-23, 1 / 2],

    -21, [-21, 1 / 2], [-21, 1 / 2],
    -21, [-21, 1 / 2], [-21, 1 / 2],
    -21, [-21, 1 / 2], [-21, 1 / 2],
    -21, [-21, 1 / 2], [-21, 1 / 2],

    -16, [-28, 1 / 2], [-28, 1 / 2],
    -28, [-28, 1 / 2], [-28, 1 / 2],
    -28, [-28, 1 / 2], [-28, 1 / 2],
    -28, [-26, 1 / 2], [-24, 1 / 2],

    -23, [-23, 1 / 2], [-23, 1 / 2],
    -23, [-23, 1 / 2], [-23, 1 / 2],
    -23, [-23, 1 / 2], [-23, 1 / 2],
    -23, [-23, 1 / 2], [-23, 1 / 2],

    -25, [-25, 1 / 2], [-25, 1 / 2],
    -25, [-25, 1 / 2], [-25, 1 / 2],
    -25, [-25, 1 / 2], [-25, 1 / 2],
    -25, [-25, 1 / 2], [-25, 1 / 2],

    -27, [-27, 1 / 2], [-27, 1 / 2],
    -27, [-27, 1 / 2], [-27, 1 / 2],
    -27, [-27, 1 / 2], [-27, 1 / 2],
    -27, [-27, 1 / 2], [-27, 1 / 2],

    -28, [-28, 1 / 2], [-28, 1 / 2],
    -28, [-28, 1 / 2], [-28, 1 / 2],
    -28, [-28, 1 / 2], [-28, 1 / 2],
    -28, [-28, 1 / 2], [-28, 1 / 2],

    -29, [-29, 1 / 2], [-29, 1 / 2],
    -29, [-29, 1 / 2], [-29, 1 / 2],
    -29, [-29, 1 / 2], [-29, 1 / 2],
    -29, [-29, 1 / 2], [-29, 1 / 2],

    -28, [-28, 1 / 2], [-28, 1 / 2],
    -28, [-28, 1 / 2], [-28, 1 / 2],
    -28, [-28, 1 / 2], [-28, 1 / 2],
    -28, [-28, 1 / 2], [-28, 1 / 2],

    -29, [-29, 1 / 2], [-29, 1 / 2],
    -29, [-29, 1 / 2], [-29, 1 / 2],
    -29, [-29, 1 / 2], [-29, 1 / 2],
    -29, [-29, 1 / 2], [-29, 1 / 2],

    -28, [-28, 1 / 2], [-28, 1 / 2],
    -28, [-28, 1 / 2], [-28, 1 / 2],
    -28, [-28, 1 / 2], [-28, 1 / 2],
    -28, [-28, 1 / 2], [-28, 1 / 2],

    -22, [-22, 1 / 2], [-22, 1 / 2],
    -22, [-22, 1 / 2], [-22, 1 / 2],
    -22, [-22, 1 / 2], [-22, 1 / 2],
    -22, [-22, 1 / 2], [-22, 1 / 2],

    -23, [-23, 1 / 2], [-23, 1 / 2],
    -23, [-23, 1 / 2], [-23, 1 / 2],
    -23, [-23, 1 / 2], [-23, 1 / 2],
    -23, [-23, 1 / 2], [-23, 1 / 2],

    -21, [-21, 1 / 2], [-21, 1 / 2],
    -21, [-21, 1 / 2], [-21, 1 / 2],
    -21, [-21, 1 / 2], [-21, 1 / 2],
    -21, [-21, 1 / 2], [-21, 1 / 2],

    -16, [-28, 1 / 2], [-28, 1 / 2],
    -28, [-28, 1 / 2], [-28, 1 / 2],
    -28, [-28, 1 / 2], [-28, 1 / 2],
    -28, [-26, 1 / 2], [-24, 1 / 2]
  ]

  var notes = prelude
    .concat(overtune)
    .concat(verse)
    .concat(prelude)
    .concat(overtune)
    .concat(verse)

  return {
    name: 'triangle',
    waveform: 'triangle',
    config: {
      instrument: {
        sampleRate: 44100,
        bpm: 190,
        fadeOut: {
          from: 0.8,
          to: 1
        }
      },
      audio: {
        volume: 0.2
      }
    },
    notes: notes
  }
})