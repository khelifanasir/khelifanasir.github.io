"use strict";
/*
module.exports = {
  maxOfThree,
  sum,
  multiply,
  findLongestWord,
  reverseArray,
  reverseArrayInPlace,
  scoreExams,
}; *

/**
 * 
 * @param {number} num1 is a number
 * @param {number} num2 is a number 
 * @param {number} num3 is a number
 * @returns {number} largest of num1, num2, num3
 */
function maxOfThree(num1, num2, num3) {
  if (num1 > num2) {
    if (num1 > num3) {
      return num1;
    } else {
      return num3;
    }
  } else {
    if (num2 > num3) {
      return num2;
    } else {
      return num3;
    }
  }
}
/**
 * 
 * @param {Array} arr1 of numbers
 * @returns {number} sum of arr1 numbers
 */
function sum(arr1) {
  let sum = 0;
  for (let eachElement of arr1) {
    sum += eachElement;
  }
  return sum;
}
/**
 * 
 * @param {Array} arr3 of numbers
 * @returns {number} sum of arr3 numbers
 */
function multiply(arr3) {
  let product = 1;
  for (let eachOne of arr3) {
    product *= eachOne;
  }
  return product;
}
/**
 * 
 * @param {String} words is the string. 
 * @returns {int}return the longest word.
 */
function findLongestWord(words) {
  let longestWordLength = words[0].length;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWordLength) {
      longestWordLength = words[i].length;
    }
  }
  return longestWordLength;
}
/**
 * 
 * @param {Array} initialArray is the input value of array.
 * @returns{Array} return array.
 */
function reverseArray(initialArray) {
  let newArray = [];
  let index = 0;
  for (let i = initialArray.length - 1; i >= 0; i--) {
    newArray[index] = initialArray[i];
    index++;
  }
  return newArray;
}
/**
 * 
 * @param {Array} array is the input array value.
 * @returns{Array} return new array.
 */
function reverseArrayInPlace(array) {
  let j = 0;
  let temp = [];
  for (let i = array.length - 1; i >= 0; i--) {
    temp[j] = array[i];
    j++;
  }
  for (let i = 0; i < temp.length; i++) {
    array[i] = temp[i];
  }
  return array;
}
/**
 * 
 * @param {Array} studentAnswers an array of student answer..
 * @param {Array} correctAnswers if the corret answer of student 
 * @returns{Array} return the score of students.
 */
function scoreExams(studentAnswers, correctAnswers) {
  let score = [];
  for (let eachAnswer of studentAnswers) {
    let count = 0;
    for (let i = 0; i < eachAnswer.length; i++) {
      if (eachAnswer[i] === correctAnswers[i]) count++;
    }
    score.push(count);
  }
  return score;
}
console.log(scoreExams(3,3));
console.log(scoreExams(2,3));
console.log(scoreExams(2,1));


function generateArray(n,m){let arr=[];

    let count = 1;
    
    for (let i = 0; i < n; i++) {
    
      for (let j = 0; j < m; j++) {
    
        arr[i][j]= count;
    
    
    
     count++;
    
    }
    
    }
    
    
    
    for (let i = 0; i < 3; i++) {
    
      for (let j = 0; j < 3; j++){
    
      console.log(arr[i][j]);
    
      }
    
      }