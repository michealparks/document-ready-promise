
(function(document, promise) {

  if (!document.ready) document.ready = promise
  if (typeof module !== 'undefined') module.exports = promise

})(window.document, new Promise(function(resolve) {

  var d = document, w = window,
      loaded = /^loaded|^i|^c/.test(d.readyState),
      DOMContentLoaded = 'DOMContentLoaded', load = 'load'

  if (loaded) return resolve()

  function onReady() {
    resolve()
    d.removeEventListener(DOMContentLoaded, onReady)
    w.removeEventListener(load, onReady)
  }

  d.addEventListener(DOMContentLoaded, onReady)
  w.addEventListener(load, onReady)

}))

