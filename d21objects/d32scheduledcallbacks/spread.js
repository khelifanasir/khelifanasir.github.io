"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//module.exports = {copyArray, concat, findMin, combineObjs }; //add all of your function names here that you need for the node mocha tests



function copyArray(arr){

let copayofarr = [...arr]
return copayofarr

}

function concat(arr1, arr2){
    let newarr = [...arr1,...arr2]
return newarr
}

function findMin(...numbers) {
    let minimum = Math.min(...numbers)
    return minimum
}

function combineObjs(obj1, obj2){
    let concatobj =  {...obj1,...obj2}
    
return concatobj
}