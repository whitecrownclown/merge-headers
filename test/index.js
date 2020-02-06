const test = require('ava');
const mergeHeaders = require('../');

test('plain objects', t => {
	const original = {
        rainbow: 'rainbow',
        unicorn: 'unicorn'
    }

	const extended = {
        rainbow: undefined
    };

    const result = mergeHeaders(
        original, extended
    );

	t.true('unicorn' in result);
	t.false('rainbow' in result);
});

test('Headers instances', t => {
	const original = new Headers({
        rainbow: 'rainbow',
        unicorn: 'unicorn'
    });

	const extended = new Headers({
        rainbow: undefined
    });

    const result = mergeHeaders(
        original,
        extended
    );

	t.false('rainbow' in result);
	t.true('unicorn' in result);
});

test('Headers instance and plain object', t => {
	const original = new Headers({
        rainbow: 'rainbow',
        unicorn: 'unicorn'
    });

	const extended = {
        rainbow: undefined
    };

    const result = mergeHeaders(
        original,
        extended
    );

	t.false('rainbow' in result);
	t.true('unicorn' in result);
});

test('Headers instance, plain object, arrays', t => {
	const original = new Headers({
        rainbow: 'rainbow',
        unicorn: 'unicorn'
    });

	const extended = {
        rainbow: undefined
    };

    const array = [
        ['foo', 'bar']
    ]

    const result = mergeHeaders(
        original,
        extended,
        array
    );

	t.false('rainbow' in result);
    t.true('unicorn' in result);
    t.true('foo' in result);
});
