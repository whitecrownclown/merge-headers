function isObject (value: any) {
  return value !== null && typeof value === 'object'
}

function merge (...sources: HeadersInit[]) {
  const result = {}

  for (const source of sources) {
    if (!isObject(source)) {
      throw new TypeError('All arguments must be of type object')
    }

    const headers: Headers = new Headers(source)

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
