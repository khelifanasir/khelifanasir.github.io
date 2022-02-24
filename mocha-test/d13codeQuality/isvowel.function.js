
"use strict";
const assert = require("assert");
module.exports = {isVowel};
/**
 * 
 * @param {String} v is string.
 *
 * @returns {boolean} check v is vowel true if not false.
 */

function isVowel(v){
    if ( (v === "a") || (v === "e") || (v === "i") || (v === "o") || (v === "u")){
        return true;
    } else {
        return false;
    }
}
console.log(isVowel("a"));
console.log(isVowel("e"));
console.log(isVowel("i"));
console.log(isVowel("o"));
console.log(isVowel("u"));
console.log(isVowel("5"));


