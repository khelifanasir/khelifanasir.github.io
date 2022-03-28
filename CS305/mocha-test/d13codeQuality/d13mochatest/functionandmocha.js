"use strict";
const assert = require("assert");


function computeSalesCommission (issalaried, sales){
    let commission;
   if (issalaried === true){
       if( sales < 300 ){
           commission = 0
       } else if (sales < 500){
           commission = sales * (0.01)
       }else if ( sales >  500){
               commission = ((sales-500) * (0.02)) + (500*0.01)
           }
       }
   else if ( issalaried === false){
         if ( sales < 300){
             commission = 0
         } else if (sales < 500){
             commission = sales * (0.02)
         } else if ( sales > 500){
      commission = ((sales-500) * (0.03)) + (500*0.02)
         }
}
return commission
}
console.log(computeSalesCommission(true, 200));
console.log(computeSalesCommission(false, 200));
console.log(computeSalesCommission(true, 300));
console.log(computeSalesCommission(false, 300));
console.log(computeSalesCommission(true, 3500));
console.log(computeSalesCommission(false, 3500));


describe("test of ComputSalesCommission", function(){
    it("tests salaried and 200 sales", function(){
    assert.strictEqual(computeSalesCommission(true, 200), 0);
    });
    it("tests not salaried and 200 sales", function(){
    assert.strictEqual(computeSalesCommission(false, 200), 0);
    });
    it("tests salaried and 300 sales", function(){
    assert.strictEqual(computeSalesCommission(true, 300), 3);
    });
    it("tests not salaried and 300 sales", function(){
    assert.strictEqual(computeSalesCommission(false, 300), 6);
    });
    it("tests salaried and 3500 sales", function(){
    assert.strictEqual(computeSalesCommission(true, 3500), 65);
    });
    it("tests not salaried and 3500 sales", function(){
    assert.strictEqual(computeSalesCommission(false, 3500), 100);
    });
   });