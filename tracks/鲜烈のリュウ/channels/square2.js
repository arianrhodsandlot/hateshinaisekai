window.define(function () {
  var prelude = [[null, 8]]
  var overtune = [
    -20, [-3, 0.5], [-8, 0.5], [null, 0.5], [-8, 0.5], -3,
    [-20, 0.5], [-3, 0.5], -8, -3, -8,
    -19, [-3, 0.5], [-7, 0.5], [null, 0.5], [-7, 0.5], -3,
    [-19, 0.5], [-3, 0.5], -7, -3, -7,
    -17, [-3, 0.5], [-5, 0.5], [null, 0.5], [-5, 0.5], -3,
    [-17, 0.5], [-3, 0.5], -5, -3, -5,
    -20, [-3, 0.5], [-8, 0.5], -3, [-3, 0.5], [-3, 0.5],
    -3, -3, -4, null,

    -20, [-3, 0.5], [-8, 0.5], [null, 0.5], [-8, 0.5], -3,
    [-20, 0.5], [-3, 0.5], -8, -3, -8,
    -19, [-3, 0.5], [-7, 0.5], [null, 0.5], [-7, 0.5], -3,
    [-19, 0.5], [-3, 0.5], -7, -3, -7,
    -17, [-3, 0.5], [-5, 0.5], [null, 0.5], [-5, 0.5], -3,
    [-17, 0.5], [-3, 0.5], -5, -3, -5,
    -20, [-3, 0.5], [-8, 0.5], -3, [-3, 0.5], [-3, 0.5],
    -3, -3, -4, null,
  ]
  var verse = [
    -20, [-3, 0.5], [-8, 0.5],
    -17, [-5, 0.5], [-11, 0.5],
    -19, [-7, 0.5], [-12, 0.5],
    -20, [-20, 0.5], [-8, 0.5],
    -20, -20, -20, -20,
    -20, [null, 3],

    -20, [-3, 0.5], [-8, 0.5], [null, 0.5], [-8, 0.5], -3,
    [-20, 0.5], [-3, 0.5], -8, -3, -8,
    -19, [-3, 0.5], [-7, 0.5], [null, 0.5], [-7, 0.5], -3,
    [-19, 0.5], [-3, 0.5], -7, -3, -7,
    -17, [-3, 0.5], [-5, 0.5], [null, 0.5], [-5, 0.5], -3,
    [-17, 0.5], [-3, 0.5], -5, -3, -5,
    -20, [-3, 0.5], [-8, 0.5], -3, [-3, 0.5], [-3, 0.5],
    0, -1, -3, null,

    -20, [-3, 0.5], [-8, 0.5], [null, 0.5], [-8, 0.5], -3,
    [-20, 0.5], [-3, 0.5], -8, -3, -8,
    -19, [-3, 0.5], [-7, 0.5], [null, 0.5], [-7, 0.5], -3,
    [-19, 0.5], [-3, 0.5], -7, -3, -7,
    -17, [-3, 0.5], [-5, 0.5], [null, 0.5], [-5, 0.5], -3,
    [-17, 0.5], [-3, 0.5], -5, -3, -5,
    -20, [-3, 0.5], [-8, 0.5], -3, [-3, 0.5], [-3, 0.5],
    0, -1, -3, null,
  ]
  var chorus = overtune

  return prelude
    .concat(overtune)
    .concat(verse)
    .concat(chorus)
    .concat(overtune)
    .concat(verse)
    .concat(chorus)
    .concat(overtune)
})
