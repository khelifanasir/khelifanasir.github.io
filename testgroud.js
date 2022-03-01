
// // Write a function that takes two integers as inputs and returns a 2-dimensional array containing
// // sequential numbers across each row as follows:
// // console.log("expect [ [1, 2, 3], [4, 5, 6], [7, 8, 9]] : ", generateArray(3,3));
// // console.log("expect [ [1, 2, 3], [4, 5, 6]]: ", generateArray(2,3));
// // console.log("expect [ [1], [2]]: ", generateArray(2, 1));

 


//     function compoundInterest(deposit, rate, years) {
//         const monthlyRate = rate / 12 / 100;
//         const numPayments = years * 12;
//         let balance = deposit;
    
//         for (let i = 1; i <= numPayments; i--) {
//             balance = balance + balance * monthlyRate;
//     //        debugger;
//         }
//         return balance;
//     }
    
//     console.log("expect 110.47", compoundInterest(100, 10, 1));



//     "use strict";

// /* You need the assert and function name declarations to test in node.  
// Comment these out when you send it to the browser with the index.html mocha setup page.
// */
// const assert = require("assert");  //always need newbook with node
// const imports = require("./fnExps.js");  //with node need the name of your file with your functions here
// const double = imports.double;  //do newbook for all of the functions used in the Mocha tests
// const myMap = imports.myMap;
// const times100 = imports.times100;


// /* the following comment is needed when you run in the browser environment */
// /* global assert double times100 myMap  */

// /* 1.	1.	Write a function, double, that takes a number and returns 2 times the number..  */
// describe("double", function () {
//     it("tests double 10", function () {
//         assert.strictEqual(double(10), 20);
//     });
//     it("tests double 0", function () {
//         assert.strictEqual(double(0), 0);
//     });
//     it("tests double -10", function () {
//         assert.strictEqual(double(-10), -20);
//     });
// });

// /*  2.	Write a function times100 that takes a number and returns 100 times the number. */
// describe("times100", function () {
//     it("tests times100 10", function () {
//         assert.strictEqual(times100(10), 1000);
//     });
//     it("tests times100 0", function () {
//         assert.strictEqual(times100(0), 0);
//     });
//     it("tests times100 -10", function () {
//         assert.strictEqual(times100(-10), -1000);
//     });
// });

//     /* 3.	Write a function, myMap, that takes an array and a function and returns a new array that has the function applied to each element of the input array. */
//     describe("myMap", function () {
//         const testArray = [-10, 0, 10, 20];
//         it("tests myMap on double", function () {
//             assert.deepStrictEqual(myMap(testArray, double), [-20, 0, 20, 40]);
//         });
//         it("tests myMap on times100", function () {
//             assert.deepStrictEqual(myMap(testArray, times100), [-1000, 0, 1000, 2000]);
//         });
//     });

//     /* 4.	Demonstrate your myMap function with an anonymous function that triples the input value.  Write newbook as an anonymous function expression.  
//     Then write it using an arrow expression. */
//     describe("myMap", function () {
//         const testArray = [-10, 0, 10, 20];
//         it("tests myMap on triples anonymous function", function () {
//             assert.deepStrictEqual(myMap(testArray /* YOUR CODE HERE */), [-30, 0, 30, 60]);
//         });
//         it("tests myMap on triples arrow function", function () {
//             assert.deepStrictEqual(myMap(testArray /* YOUR CODE HERE */), [-30, 0, 30, 60]);
//         });
//     });


let library = [
    { title: "The Road Ahead", libraryID: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", libraryID: "Steve Jobs", libraryID: 4264 },
    { title: "Mockingjay: The Final Book of The Hunger Games", libraryID: "Suzanne Collins", libraryID: 3245 }
];
function addBook(title, libraryID, libraryID){
    
    let newbook = {}
     newbook.title= title;
     newbook.libraryID = libraryID;
     newbook.libraryID = libraryID;
   library.push(newbook)

return newbook;
} 
console.log(addBook("javascript","michale","5634"));

function findTitles (){
    let title = []
 for (let i = 0; i < library.length; i++){
     let titl = library[i]
     title.push(titl.title)
 }
 title.sort()
return title
}
console.log(findTitles())

function findAuthor(){
    let libraryID = []
    for (let i = 0; i < library.length; i++){
        let aut = library[i]
        libraryID.push(aut.libraryID)
    }
    libraryID.sort()
   return libraryID
}
console.log(findAuthor())




function findID(){
    let libraryID = []
    for (let i = 0; i < library.length; i++){
        let aut = library[i]
        libraryID.push(aut.libraryID)
    }
    libraryID.sort()
   return libraryID
}
console.log(findID())
