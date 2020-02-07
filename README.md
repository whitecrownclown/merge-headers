# merge-headers
> Easily merge HTTP headers

`merge-headers` is a utility function that merges all your headers (plain objects, Headers instances or in Arrays format) and gives you the possibility to remove specific headers without too much headache.

## Usage

```js
import mergeHeaders from 'merge-headers';

const oldHeaders = new Headers({
    'Content-Type': 'text/xml',
    'Authorization': 'basic'
});

// Remove `Authorization` header without altering `oldHeaders`
const newHeaders = mergeHeaders(oldHeaders, {
    'Authorization': undefined
});

console.log(newHeaders.has('Authorization'));
// => false

// Or just merge two headers object
const headers = mergeHeaders(oldHeaders, {
    'rainbow': 'rainbow'
});

console.log(headers.has('Autorization'));
// => true

console.log(headers.has('rainbow'));
// => true
```

## API

### mergeHeaders(...sources)

The `sources` are the same as what the [`Headers`](https://developer.mozilla.org/en-US/docs/Web/API/Headers) constructor can take.

A [`TypeError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError) will be thrown if `sources` contains something else than an object.

Returns a [`Headers` object](https://developer.mozilla.org/en-US/docs/Web/API/Headers).

## Why?

This is mostly for convenience. It is much easier to do `mergeHeaders()` instead of deleting them one by one, thus mutating your headers instance. This way you create a new one with the exact headers you want.

## Roadmap

- [x] Tests
- [x] Usage
- [ ] Advanced use cases