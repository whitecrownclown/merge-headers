function isObject(value) {
    return value !== null && typeof value === 'object'
}

function merge(...sources) {
    const result = {};

    for (const source of sources) {
      if (!isObject(source)) {
        throw new TypeError("The arguments must be of type object");
      }

      const headers = new Headers(source);

      for (const [key, value] of headers.entries()) {
        // Headers constructor stringifies the value
        if ((value === undefined || value === "undefined")) {
          Reflect.deleteProperty(result, key);
        } else {
          Reflect.set(result, key, value);
        }
      }
    }

    return result;
}

module.exports = merge;