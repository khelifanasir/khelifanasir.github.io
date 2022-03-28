"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser.
*/
//module.exports = { myMap, myFilter, myReduce }; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {*} arr 
 * @param {*} func 
 * @returns 
 */
function myMap(arr, func) {
    let newarr = []
   for (let each of arr){
       newarr.push(func(each))
      
   }
return newarr
}
function func(num){return num * 2}
/**
 * 
 * @param {*} arr 
 * @param {*} func 
 * @returns 
 */
function myFilter(arr, func) {
    let newarr1 = []
for (let each of arr){
    if (func(each))
        newarr1.push(each)
}   
return newarr1
}

/**
 * 
 * @param {*} arr 
 * @param {*} func 
 * @param {*} initialValue 
 * @returns 
 */
function myReduce(arr, func, initialValue) {
    for(let each of arr){
        initialValue=func(initialValue,each)
    }
    return initialValue;
    }

   // console.log(myFilter([1,2,3,4,5], {}))