# document-ready-promise
A simple promise-compatible "document ready" event handler with a few extra treats.

With browserify/webpack:
```javascript
// ES5
require('document-ready-promise').then(function() {
  // Party time.
})

// or...

require('document-ready-promise').global()

document.ready.then(function() {
  // Let's do this.
})

```

Or, if in a non-commonjs environment, just include the script. It will attach ```document.ready``` for you.