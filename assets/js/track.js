require(['_', 'riot', 'tags', location.pathname + 'manifest.js'],
  function (_, riot, tags, manifest) {
    var channels = _.map(manifest.channels, function (channel) {
      channel.id = _.uniqueId()
      return channel
    })

    var workers = _.map(channels, function (channel) {
      var worker = new Worker('../../assets/js/worker.js')
      worker.id = channel.id

      worker.postMessage({
        channel: channel
      })

      return worker
    })

    var audios = []

    var track = _.first(riot.mount('track', {
      manifest: manifest
    }))

    riot.mount('title', {
      title: manifest.game + ' - ' + manifest.title
    })

    _.each(workers, function (worker) {
      worker.addEventListener('message', function (message) {
        audios.push(message.data.audio)
      })

      worker.addEventListener('message', function (message) {
        if (_.size(audios) === _.size(manifest.channels)) {
          track.load(audios)
        }
      })

      worker.addEventListener('error', function (error) {
        console.error(error)
        console.error(error.message)
      })
    })
  }
)