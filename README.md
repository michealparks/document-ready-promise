# document-ready-promise
A simple promise-compatible "document ready" event handler with a few extra treats.

Works in any browser that supports [Promises](http://caniuse.com/#feat=promises) or with a good [polyfill](https://www.npmjs.com/package/es6-promise).


With browserify/webpack:

```javascript
require('document-ready-promise').then(function() {
  // Party time.
})

// ...or use it globally.

document.ready.then(function() {
  // Let's do this.
})

```


If in a non-commonjs environment, just include the script. It will attach ```document.ready``` for you.

```html
<script src="document-ready-promise.js"></script>
<script>
document.ready.then(function() {
  // voila!
})
</script>
```


The document.ready promise will preserve any values that you may be passing through the promise chain.

```javascript
// Using ES2015 and window.fetch
fetch(new Request('kitten.jpg'))
  .then(response => response.blob())
  .then(document.ready)
  .then(blob => document.querySelector('img').src = URL.createObjectURL(blob))
```
