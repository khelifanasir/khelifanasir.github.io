"use strict";
const assert = require("assert");
module.export = {compoundInterest};
 


    function compoundInterest(initial, rate, years){

  let balance;//balance of saving

  for(let i=0; i<=years; i++){

    balance = initial * ( ( 1 + rate/1200 )**(12 * i) )

  }

  return balance

}

console.log(compoundInterest(100, 10, 1));//110.471

console.log(compoundInterest(10000, 5, 10));//16470.09
