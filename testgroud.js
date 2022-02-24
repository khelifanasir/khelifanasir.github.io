

// 1. Define a function maxOfThree() that takes three numbers as arguments and returns the
// largest of them.
// 2. Define a function sum() and a function multiply() that sums and multiplies (respectively)
// all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and
// multiply([1,2,3,4]) should return 24.
// 3. Write a function findLongestWord() that takes an array of words and returns the length of
// the longest one.
// 4. Reverse an Array

function maxOfThree( x, y, z){

    let max = Math.max(x, y, z);

    return max;  
}
console.log(maxOfThree(3,55,4));


function sum(arr){
    
    let sum = 0

    for (let i = 0; i < arr.length; i++){
        sum = sum + arr[i]
    }

    return sum
}
 console.log (sum([1,2,3,4]));


function multiply(arr) {
      
    let product = 1

    for (let i = 0; i < arr.length; i++){
        product = product * arr [i]
   }

   return product

}
console.log(multiply([1,2,3,4]));  


function findLongestWord(arr){
  
    
  let count = 0
  let largest = arr[0]
  
  for ( let i = 0; i < arr.length; i++){
      
          
        if( (arr[i]+1 ) > largest){
              largest = arr[i]+1
          }
      }
  }
  
  return largest
}

console.log(findLongestWord(["abe", "ethipoia", "datastructure"]));


function revering (arr){

  let numb1 = []
for ( let i = arr.length-1; i >= 0; i--){
  numb1.push(arr[i])
}
return numb1
}
console.log(revering( [1,2,3,4]));
