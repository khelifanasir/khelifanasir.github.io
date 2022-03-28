"use strict";

let salesman = prompt (" say 'salaried' if sales man is salaried or not 'salaried'  not")
 let sales = prompt (" enter sales amount") 
     sales = Number ( sales)
 let commission;
 

 if (salesman === "salaried"){
     if( sales < 300 ){
         commission = 0
     } else if ( sales > 300 && sales < 500){
         commission = sales * (1/100)
     }else if ( sales >  500){
             commission = sales * (2/100)
         }
     }
 else if ( salesman === "not salaried"){
       if ( sales < 300){
           commission = 0
       } else if ( sales > 300 && sales < 500){
           commission = sales * (2/100)
       } else if ( sales > 500){
    commission = sales * (3/100)
       }
 }
 console.log(commission)