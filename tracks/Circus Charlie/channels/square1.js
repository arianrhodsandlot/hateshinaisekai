window.define(function () {
  // do -7; re -5; mi -3; fa -2; so 0; la 2; xi 4
  var main = [
    [2, 0.5], [4, 0.5], 5, 5,
    [5, 0.5], [4, 0.5], [5, 0.5], [7, 0.5], 9, 9,
    [9, 0.5], [8, 0.5], [9, 0.5], [10, 0.5], 12, 12,
    [12, 0.5], [11, 0.5], [12, 0.5], [17, 0.5], [12, 3],

    9,
    10, [10, 0.5], [9, 0.5], 7, 10,
    9, [9, 0.5], [7, 0.5], 5, 9,
    7, 2, 4, 5, [7, 3],

    [2, 0.5], [4, 0.5], 5, 5,
    [5, 0.5], [4, 0.5], [5, 0.5], [7, 0.5], 9, 9,
    [9, 0.5], [8, 0.5], [9, 0.5], [10, 0.5], 12, 12,
    [12, 0.5], [11, 0.5], [12, 0.5], [17, 0.5], [12, 3],

    5, 14, 12, 10, 9, 7, 5, 4, 5,
    7, [9, 0.5], [10, 0.5], 9, 7, 5,

    [0, 0.5], [2, 0.5], [4, 0.5], [5, 0.5], [7, 0.5], [9, 0.5],
    10, 10, 10, 10, [10, 0.5], [9, 0.5], [10, 2],

    11,
    12, 12, [12, 0.5], [10, 0.5], [9, 0.5], [10, 0.5], [12, 3],

    12, 14, 14, [17, 1.5], [14, 0.5], 12, 12, [12, 0.5], [10, 0.5], 9,
    10, 10, 4, 7, 5, 5, 5
  ]
  return main.concat(main)
})