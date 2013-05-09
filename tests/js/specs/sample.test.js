/*global test, chai, suite*/
'use strict';

var assert = chai.assert;

suite('GruntJS Demo - Sample Test', function () {
    test('Assume true will always be true', function () {
        assert.strictEqual(true, true);
    });
});

// ==========================================
// Using Chai @ http://chaijs.com/api/assert/
// ==========================================
suite('Assert Library Examples', function () {
    var str = 'Hello World!',
        falsePositive = 0;

    test('Assert - typeOf', function () {
        assert.typeOf(str, 'string', 'str is a string');
    });

    test('Assert - equal', function () {
        // equal assertion should be used with caution
        // 0 should not necessarily equal false
        // ideally avoid equal and use strictEqual
        assert.equal(falsePositive, false, 'str is a string');
    });
    test('Assert - strictEqual', function () {
        assert.strictEqual(falsePositive, 0, 'str is a string');
    });

    test('Assert - notEqual', function () {
        // notEqual assertion should be used with caution
        // 0 should not necessarily equal false
        // ideally avoid notEqual and use notStrictEqual
        assert.notEqual(falsePositive, true, 'str is a string');
    });
    test('Assert - notStrictEqual', function () {
        assert.notStrictEqual(falsePositive, false, 'str is a string');
    });
});
