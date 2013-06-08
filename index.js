
module.exports = function memoize(fn) {
  var err
    , val
    , callback
    , callbacks
    , done = false

  return function(cb) {
    if (done) return cb(err, val)
    if (callback) return (callbacks || (callbacks = [])).push(cb)
    callback = cb
    fn(function(error, value) {
      err = error
      val = value
      done = true
      callback(err, val)
      if (callbacks) {
        for (var i = 0; i < callbacks.length; i++) {
          callbacks[i](err, val)
        }
      }
      callback = null
      callbacks = null
      fn = null
    })
  }
}
