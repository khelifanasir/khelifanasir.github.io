"use strict";
const prompt = require("prompt-sync")();
const tempInCelsius = prompt("Enter value in celsius: ")
const tempInFahrenheit = 9/5*parseFloat(tempInCelsius)+32;
console.log(tempInFahrenheit);


// 1. Write a program to compute sales commission based on following rules:
// • If the salesman is salaried then
// • These is no commission for sales below $300
// • 1% for sales between $300 and $500 (exclusive)
// • 2% for sales above $500
// • If the salesman is not salaried then
// • 2% for sales between $300 and $500 (exclusive)
// // • 3% for sales above $500

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


//  Write a loop that continually prompts for age until you enter age older than 18
// • Write both while and do while versions.

let age = prompt ("please enter your age")
    age = Number (age)
    while ( age < 18){
        age = prompt ("please enter your age")
    } 
  // why we dont say console.log(age)

  let age2 = prompt ("please enter your age")
    age2 = Number (age)
    do {
        age2 = prompt ("please enter your age")    
    }
    while ( age2 < 18)


//     Make a defining table and program to print out the balance of a savings account that
// compounds interest monthly. Prompt the user for the
// • initial amount
// • annual interest rate
// • number of years to compound
// the professor recommend to do it using loop(do it using loop)


let initialsaving = prompt (" please enter initial saving amount")
    initialsaving = Number (initialsaving)
let annual_interest_rate = prompt ("please enter annual interest rate")
    annual_interest_rate = Number (annual_interest_rate)
let numuber_of_years_to_compound = prompt ("please enter number of years to compound") 
    numuber_of_years_to_compound = Number (numuber_of_years_to_compound)  

 let balance_of_saving =  (initialsaving * (1+(annual_interest_rate/12))**(12*numuber_of_years_to_compound)-initialsaving) + initialsaving
 console.log(balance_of_saving);


//  . Write code to print the number patterns on the console
// 12345
// 12345
// 12345
// 12345
// 12345

// 1
// 22
// 333
// 4444
// 55555

// 55555
// 4444
// 333
// 22
// 1



for ( let i=1; i<=5; i++){
    let row = ""
    for (let j = 1; j<=5; j++){
    row = row + j
}
console.log(row)
}
//
//
for ( let i=1; i<=5; i++){
    let row = ""
    for (let j = 1; j<=i; j++){
    row = row + i
}
console.log(row)
}
//
//
for ( let i=5; i>=1; i--){
    let row = ""
    for (let j = 1; j<=i; j++){
    row = row + i
}
console.log(row)
}


// Cost of House Down Payment
// Make a defining table and then write a program that calculates down payment for a home loan based
// on following rules. Your program should prompt for the cost and write the down payment amount to
// the console.
// Cost of House Down Payment
// $0 to less than 50K 5% of the cost
// $50K to less than 100K $1000 + 10% of (cost - $50K)
// $100K to less than 200K $2000 + 15% of (cost - $100K)
// $200K and above $5000 + 10% of (cost - $200K)

let cost = prompt ("please enter the cost of the house");
    cost = Number (cost)
let downpayment;
 if ( cost < 0){
     downpayment = prompt ("please enter the cost of the house");
 } else if ( cost < 50,000){
     downpayment = cost * 5/100
 } else if ( cost < 100,000){
     downpayment = (10/100)*(cost - 50,000)
 } else if (  cost < 200,000){
     downpayment = (15/100)*(cost - 100,000)
 } else  {
     downpayment = 5,000 + (10/100)*(cost-200,000)
 }
 console.log(downpayment)



//  6. Write a JavaScript program to prompt for an integer and compute the sum of all the digits.
// Input Output
// 123 6
// 102 3
// 8 8

let num = prompt ("please enter integers")
   
    let sum = 0
    for (let i=0; i<num.length; i++){
        sum = sum + Number(num[i])
    }
    console.log(sum)


    let number = prompt ("please enter enteger")
    number = Number (number)
let sum1 = 0 
while(number){
   sum1 = sum1 + number%10
   number = Math.floor(number/10)
}
console.log(sum1)