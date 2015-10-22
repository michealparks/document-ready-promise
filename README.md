# document-ready-promise
A simple promise-compatible "document ready" event handler with a few extra treats.

Works in any browser that supports [Promises](http://caniuse.com/#feat=promises) or with a good [polyfill](https://www.npmjs.com/package/es6-promise).

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
```html
<script src="document-ready-promise.js"></script>
<script>
document.ready.then(function() {
  // voila!
})
</script>
```