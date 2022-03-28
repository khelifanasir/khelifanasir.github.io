"use strict";
/* eslint-disable */

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { ucFirst, getMaxSubSum, truncate , camelize, checkSpam}; //add all of your function names here that you need for the node mocha tests



function ucFirst(str) {

  if (str === "") {return ""}
  let capitalize = str[0].toUpperCase() + str.slice(1)
  
    return capitalize;
 
  }

function checkSpam(str) {
    let lowerStr = str.toLowerCase();

    if (lowerStr.includes('viagra') || lowerStr.includes('xxx')){
      return true } else{
        return false 
      }
    }
 
  


  function truncate(str, maxlength) {
    return (str.length > maxlength) ?

    str.slice(0, maxlength - 1) + '…' : str
    }

  




/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} the total of the maximal subarray
 
 */
function getMaxSubSum(arr) {
  let maxSum = 0; 

  for (let i = 0; i < arr.length; i++) {
    let sumFixedStart = 0;
    for (let j = i; j < arr.length; j++) {
      sumFixedStart += arr[j];
      maxSum = Math.max(maxSum, sumFixedStart);
    }
  }

  return maxSum;

}


function camelize(str) {
  return str.split('-').map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    ).join(''); 

  

  }


