var assert = require('assert');
var testMod = require("../../scripts/testModule");
var testModule = new testMod();
var testModule2 = new testMod();

describe('testModule', function () {
    describe('constructor test', function () {
        it('object exists', function () {
            assert(testModule);
        });
    },
        it("method exists", function() {
            assert.ok(true);
    })),
    describe('separate objects', function() {
        it('object exists', function() {
                testModule.publicVar = 15;
                assert(testModule.publicVar !== testModule2.publicVar);
        }, it('method exists', function () {
                console.log(testModule.otherFunction("ertertERTERT"));
                assert(testModule.publicVar === testModule2.publicVar);
                }
            )
        );
    });
});