function isObject (value) {
  return value !== null && typeof value === 'object'
}

function merge (...sources) {
  const result = {}

  for (const source of sources) {
    if (!isObject(source)) {
      throw new TypeError('All arguments must be of type object')
    }

    const headers = source.constructor === Headers ? source : new Headers(source)

    for (const [key, value] of headers.entries()) {
      if ((value === undefined || value === 'undefined')) {
        delete result[key]
      } else {
        result[key] = value
      }
    }
  }

  return new Headers(result)
}

module.exports = merge
