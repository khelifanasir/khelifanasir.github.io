"use strict";
const assert = require ("assert");
const functionsModule = require("./compoundinterestfunctiononly.js");
const compoundInterest = functionsModule.compoundInterest;





describe("test of compoundInterest", function(){
    it("tests compoundinterest", function(){
    assert.strictEqual(compoundInterest(100,10.1), 110.47130674412968);
    });
    it("tests compoundinterest", function(){
    assert.strictEqual(compoundInterest(10000,5,10), 16470.0949769028);
    });
   });