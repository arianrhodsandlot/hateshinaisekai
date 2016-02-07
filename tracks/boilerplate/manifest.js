define(
  ['channels/square1.js', 'channels/square2.js', 'channels/triangle.js', 'channels/noise.js'],
  function (square1, square2, triangle, noise) {
    return {
      game: '?',
      title: '?',
      year: '1985',
      company: '?',
      channels: [square1, square2, triangle, noise]
    }
  })
