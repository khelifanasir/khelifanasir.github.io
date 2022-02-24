"use strict";
const assert = require("assert");
module.export = {computeSalesCommission}

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