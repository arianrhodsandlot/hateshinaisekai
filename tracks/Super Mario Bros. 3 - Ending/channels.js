var by75percent = function (notes) {
  return _.map(notes, function (note) {
    return _.isArray(note) ? [note[0], note[1] * 0.75] : [note, 0.75]
  })
}

;(function () {
  var prelude = [
    -10, -10, -9, -9, [null, 2],
    -7, -7, -6, -6, -5, -5, -9, -9,
    0, 0, -2, -2, -4, -4, -5, -5,
    -7, -7, -4, -4, -2, -2,
    -14, -14, -9, -9,

    -10, -10, -9, -9, [null, 2],
    -7, -7, -6, -6, -5, -5, -9, -9,
    0, 0, -2, -2, -4, -4, -5, -5,
    -7, -7, -4, -4, -2, -2,

    -14, -14, -9, -9, -10, -10, -5, -5,
    -3, -3, -1, -1, 2, 2, 0, 0,
    -1, -1, 0, 0, -2, -2, -4, -4,
    -2, -2, -1, -1, -4, -4, -2, -2,
    -14, -14, -4, -4,

    -10, -10, -9, -9, [null, 2],
    -7, -7, -6, -6, -5, -5, -9, -9,
    0, 0, -2, -2, -4, -4, -5, -5,
    -7, -7, -4, -4, -2, -2,
    -10, -10, -9, -9
  ]

  var overtune = by75percent([
    [-10, 2], 2, [0, 2], -4, -7, -9, -10, null, -10, [null, 7]
  ])

  var verse = by75percent([
    3, 5, 3, 2, 0, -2, [0, 2], 0, [-4, 2], [null, 5],
    -2, 0, -2, -4, -5, -7, [-9, 2], -9, [-5, 2], [null, 5],

    3, 5, 3, 2, 0, -2, [0, 2], 0, [-4, 2], [null, 5],
    -2, 0, -2, -4, -5, -7, [-9, 2], -9, [-5, 2], [null, 5],

    -9, -7, 8, 11, 10, 8, [7, 2], [null, 1], [3, 2], [null, 5],
    -9, -7, 8, 11, 10, 8, [7, 2], [null, 1], [3, 2], [null, 5],

    -9, -7, 8, 11, 10, 8, [7, 2], [null, 1], [10, 2], [null, 5],
    -4, -5, -4, -2, 0, -4, [2, 2], [null, 4]
  ])

  var chorus = by75percent([
    [null, 2], -9, [10, 0.5], [7, 0.5], 3, -2, null,
    2, -9, -7, -7, [8, 0.5], [5, 0.5], 2, -2, [null, 2],
    [-4, 2], [-5, 1], [8, 0.5], [5, 0.5], 1, -2, null,
    -7, -9, -7, 0, [8, 0.5], [3, 0.5], 0, -4, [null, 2],

    [-7, 2], -9, [8, 0.5], [3, 0.5], -1, -4, null,
    -9, -10, -9, -2, [7, 0.5], [3, 0.5], -2, -5,
    [-14, 1.5], [-12, 1.5], -9, -12, [9, 0.5], [3, 0.5], 0, -3, null,
    -12, -13, -12, -10, [8, 0.5], [5, 0.5], 2, -2, null, null,

    [null, 2], -9, [10, 0.5], [7, 0.5], 3, -2, null,
    2, -9, -7, -7, [8, 0.5], [5, 0.5], 2, -2, [null, 2],
    [-4, 2], [-5, 1], [8, 0.5], [5, 0.5], 1, -2, null,
    -7, -9, -7, 0, [8, 0.5], [3, 0.5], 0, -4, [null, 2],

    [-7, 2], -9, [8, 0.5], [3, 0.5], -1, -4, null,
    -9, -10, -9, -2, [6, 0.5], [3, 0.5], -2, -5,
    [-14, 1.5], [-12, 1.5], -9, -12, [9, 0.5], [3, 0.5], 0, -3, null,
    -12, -13, -12, -10, null, -10, [null, 7]
  ])

  var notes = prelude
    .concat(overtune)
    .concat(verse)
    .concat(chorus)
    .concat(verse)
    .concat(chorus)

  window.channels.push({
    name: 'square1',
    config: {
      instrument: {
        waveform: 'square',
        sampleRate: 44100,
        bpm: 233,
        fadeOut: {
          from: 0,
          to: 1.2
        }
      },
      audio: {
        volume: 0.2
      }
    },
    notes: notes
  })
})()

;(function () {
  var prelude = [
    [10, 2 / 3], [9, 2 / 3], [10, 2 / 3], 7, 7, 7, 7,
    8, 8, 9, 9, 10, 10, 10, 10,
    15, 15, [19, 2 / 3], [19, 2 / 3], [19, 2 / 3], 17, 17, 19, 19, 20, 20, 14, 14, 17, 17, 17, 17,
    15, 15,

    [10, 2 / 3], [9, 2 / 3], [10, 2 / 3], 7, 7, 7, 7,
    8, 8, 9, 9, 10, 10, 10, 10,
    15, 15, [19, 2 / 3], [19, 2 / 3], [19, 2 / 3], 17, 17, 19, 19, 20, 20, 14, 14, 17, 17, 17, 17,
    15, 15,

    [19, 2 / 3], [19, 2 / 3], [19, 2 / 3], 19, 19, 19, 19,
    14, 14, 14, 17, 17, 17, null,
    [15, 1 / 2], [14, 1 / 2], 15, 15,
    [20, 2 / 3], [20, 2 / 3], [20, 2 / 3], 20, 20, 20, 20,
    15, 15, 15, 17, 19, 19, 19, 19, 17, 17,

    [10, 2 / 3], [9, 2 / 3], [10, 2 / 3], 7, 7, 7, 7,
    8, 8, 9, 9, 10, 10, 10, 10,
    15, 15, [19, 2 / 3], [19, 2 / 3], [19, 2 / 3], 17, 17, 19, 19, 20, 20, 14, 14, 17, 17, 17, 17,
    15, 15
  ]

  var overtune = by75percent([
    [-2, 2], 10, [8, 2], 5, 2, 0, -2, null, -2, [null, 7]
  ])

  var verse = by75percent([
    7, 8, 7, 5, 3, 2, [5, 2], 5, [0, 3], [null, 4],
    2, 3, 2, 0, -2, -4, [-5, 2], -5, [-2, 3], [null, 4],

    7, 8, 7, 5, 3, 2, [5, 2], 5, [0, 3], [null, 4],
    2, 3, 2, 0, -2, -4, [-5, 2], -5, [-2, 3], [null, 4],

    -4, -2, -1, 3, 1, -1, [-2, 2], [null, 1], [-5, 3], [null, 4],
    -4, -2, -1, 3, 1, -1, [-2, 2], [null, 1], [-5, 3], [null, 4],

    -4, -2, -1, 3, 1, -1, [-2, 2], [null, 1], [3, 3], [null, 4],
    0, -1, 0, 2, 3, 0, [5, 3], [null, 3]
  ])

  var chorus = by75percent([
    [-2, 2], [7, 5],
    5, 7, 8, [10, 6],
    [12, 2], [10, 5],
    8, 7, 8, [3, 6],

    [10, 2], [8, 5],
    7, 5, 7, [3, 4],
    [2, 4 / 3], [3, 4 / 3], [7, 4 / 3], [5, 5],
    3, 2, 3, [5, 6],

    [-2, 2], [7, 5],
    5, 7, 8, [10, 6],
    [12, 2], [10, 5],
    8, 7, 8, [3, 6],

    [10, 2], [8, 5],
    7, 5, 7, [3, 4],
    [2, 4 / 3], [3, 4 / 3], [7, 4 / 3], [5, 5],
    3, 2, 3, 10, null, 10, [null, 7]
  ])

  var notes = prelude
    .concat(overtune)
    .concat(verse)
    .concat(chorus)
    .concat(verse)
    .concat(chorus)

  window.channels.push({
    name: 'square2',
    config: {
      instrument: {
        waveform: 'square?d=0.25',
        sampleRate: 44100,
        bpm: 233,
        fadeOut: {
          from: 0,
          to: 1.2
        }
      },
      audio: {
        volume: 0.2
      }
    },
    notes: notes
  })
})()

;(function () {
  var prelude = [[null, 128]]

  var overtune = by75percent([
    [-14, 2], -2, [-4, 2], -7, -10, -12, -14, null, -14, [null, 5], [-21, 3]
  ])

  var verse = by75percent([
    [-17, 2], -17, [-14, 2],
    [-16, 3], [-12, 2], -12, [-9, 2],
    [-14, 3], [-10, 2], -10, [-7, 2],
    [-21, 3], [-17, 2], -17, [-14, 2],

    [-21, 3], [-17, 2], -17, [-14, 2],
    [-16, 3], [-12, 2], -12, [-9, 2],
    [-14, 3], [-10, 2], -10, [-7, 2],
    [-21, 3], [-17, 2], -17, [-14, 2],

    [-16, 2], -16, [-13, 2], -13, [-9, 2],
    [-21, 2], -21, [-17, 2], -17, [-14, 2],
    [-16, 2], -16, [-13, 2], -13, [-9, 2],
    [-21, 2], -21, [-17, 2], -17, [-14, 2],

    [-16, 2], -16, [-13, 2], -13, [-9, 2],
    [-17, 2], -17, [-14, 2], -14, [-9, 2],
    [-18, 2], -18, [-14, 2], -14, [-9, 2],
    [-19, 2], -19, [-14, 2], -14, [-14, 2]
  ])

  var chorus = by75percent([
    [-9, 2], -14, [-9, 2], -14, [-9, 2],
    [-10, 2], -14, [-10, 2], -14, [-10, 2],
    [-11, 2], -14, [-11, 2], -14, [-11, 2],
    [-12, 2], -16, [-12, 2], -16, [-12, 2],

    [-13, 2], -16, [-13, 2], -16, [-13, 2],
    [-14, 2], -17, [-14, 2], -17, [-14, 2],
    [-15, 2], -19, [-15, 2], -19, [-15, 2],
    [-14, 2], -17, [-14, 2], -17, [-14, 2],

    [-9, 2], -14, [-9, 2], -14, [-9, 2],
    [-10, 2], -14, [-10, 2], -14, [-10, 2],
    [-11, 2], -14, [-11, 2], -14, [-11, 2],
    [-12, 2], -16, [-12, 2], -16, [-12, 2],

    [-13, 2], -16, [-13, 2], -16, [-13, 2],
    [-14, 2], -17, [-14, 2], -17, [-14, 2],
    [-15, 2], -19, [-15, 2], -19, [-15, 2],
    [-14, 2], -17, [-14, 2], -17, [-14, 2],

    [-21, 3]
  ])

  var notes = prelude
    .concat(overtune)
    .concat(verse)
    .concat(chorus)
    .concat(verse)
    .concat(chorus)

  window.channels.push({
    name: 'triangle',
    config: {
      instrument: {
        waveform: 'triangle',
        sampleRate: 44100,
        bpm: 233,
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
  })
})()

;(function () {
  var prelude = [[null, 128]]

  var overtune = by75percent([
    [0, 0.2], [null, 0.8], [0, 0.1], [null, 0.4], [0, 0.1], [null, 0.4], [0, 0.2], [null, 0.8], [0, 0.2], [null, 0.8],
    [0, 0.2], [null, 0.8], [0, 0.2], [null, 0.8], [0, 0.2], [null, 0.8], [0, 0.2], [null, 0.8]
  ])

  var verse = _.flatten(_.map(_.times(16), _.constant(overtune)))

  var chorus = _.flatten(_.map(_.times(17), _.constant(overtune)))

  var notes = prelude
    .concat(overtune)
    .concat(verse)
    .concat(chorus)
    .concat(verse)
    .concat(chorus)

  window.channels.push({
    name: 'noise',
    config: {
      instrument: {
        waveform: 'noise',
        sampleRate: 44100,
        bpm: 233
      },
      audio: {
        volume: 0.2
      }
    },
    notes: notes
  })
})()
