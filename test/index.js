const test = require('ava')
const mergeHeaders = require('../')

test('plain objects', t => {
  const original = {
    rainbow: 'rainbow',
    unicorn: 'unicorn'
  }

  const extended = {
    rainbow: undefined
  }

  const result = mergeHeaders(
    original, extended
  )

  t.true(result.has('unicorn'))
  t.false(result.has('rainbow'))
})

test('Headers instances', t => {
  const original = new Headers({
    rainbow: 'rainbow',
    unicorn: 'unicorn'
  })

  const extended = new Headers({
    rainbow: undefined
  })

  const result = mergeHeaders(
    original,
    extended
  )

  t.false(result.has('rainbow'))
  t.true(result.has('unicorn'))
})

test('Headers instance and plain object', t => {
  const original = new Headers({
    rainbow: 'rainbow',
    unicorn: 'unicorn'
  })

  const extended = {
    rainbow: undefined
  }

  const result = mergeHeaders(
    original,
    extended
  )

  t.false(result.has('rainbow'))
  t.true(result.has('unicorn'))
})

test('Headers instance, plain object, arrays', t => {
  const original = new Headers({
    rainbow: 'rainbow',
    unicorn: 'unicorn'
  })

  const extended = {
    rainbow: undefined
  }

  const array = [
    ['foo', 'bar']
  ]

  const result = mergeHeaders(
    original,
    extended,
    array
  )

  t.false(result.has('rainbow'))
  t.true(result.has('unicorn'))
  t.true(result.has('foo'))
})

test('Error is thrown if sources do not contain only objects', t => {
  const original = {
    rainbow: 'rainbow',
    unicorn: 'unicorn'
  }

  const extended = {
    rainbow: undefined
  }

  t.throws(() => {
    mergeHeaders(
      original, extended, 3
    )
  }, {
    message: 'All arguments must be of type object'
  })
})

test('Result is of type Headers', t => {
  const original = new Headers({
    rainbow: 'rainbow',
    unicorn: 'unicorn'
  })

  const extended = {
    rainbow: undefined
  }

  const result = mergeHeaders(
    original,
    extended
  )

  t.false(result.has('rainbow'))
  t.true(result.has('unicorn'))
  t.true(result.constructor === Headers)
})
