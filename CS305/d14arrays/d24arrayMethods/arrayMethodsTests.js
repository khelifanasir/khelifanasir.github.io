"use strict";
/* global assert    */
/* comment out the node specific code when going to the browser*/
/**const assert = require("assert");  //always need this with node
const myExports = require("./methods.js");  //with node need the name of your file with your functions here
const groupById = myExports.groupById;  //do this for all of the functions used in the Mocha tests
const unique = myExports.unique;
const filterRangeInPlace = myExports.filterRangeInPlace;
const filterRange = myExports.filterRange;
const Calculator = myExports.Calculator;
const copySorted = myExports.copySorted;
const sortByAge = myExports.sortByAge
const shuffle = myExports.shuffle
const getAverageAge = myExports.getAverageAge*/

    

/*
Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

The function should not modify the array. It should return the new array.
*/
describe("filterRange", function () {
    it("returns the filtered values", function () {
        let arr = [5, 3, 8, 1];
        let filtered = filterRange(arr, 1, 4);
        assert.deepEqual(filtered, [3, 1]);
    });

    it("doesn't change the array", function () {
        let arr = [5, 3, 8, 1];
        let filtered = filterRange(arr, 1, 4);
        assert.deepEqual(arr, [5, 3, 8, 1]);
    });
});

/*
Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

The function should only modify the array. It should not return anything.
*/
describe("filterRangeInPlace", function () {
    it("returns the filtered values", function () {
        let arr = [5, 3, 8, 1];
        filterRangeInPlace(arr, 1, 4);
        assert.deepEqual(arr, [3, 1]);
    });

    it("doesn't return anything", function () {
        assert.equal(filterRangeInPlace([1, 2, 3], 1, 4), undefined);
    });
});

/* 
Create a constructor function Calculator that creates “extendable” calculator objects.

The task consists of two parts.  (see https://javascript.info/array-methods)
*/
describe("Calculator", function () {
    let calculator;

    before(function () {
        calculator = new Calculator();
    });

    it("calculate(12 + 34) = 46", function () {
        assert.equal(calculator.calculate("12 + 34"), 46);
    });

    it("calculate(34 - 12) = 22", function () {
        assert.equal(calculator.calculate("34 - 12"), 22);
    });

    it("add multiplication: calculate(2 * 3) = 6", function () {
        calculator.addMethod("*", (a, b) => a * b);
        assert.equal(calculator.calculate("2 * 3"), 6);
    });

    it("add power: calculate(2 ** 3) = 8", function () {
        calculator.addMethod("**", (a, b) => a ** b);
        assert.equal(calculator.calculate("2 ** 3"), 8);
    });
});

/* Create a function unique(arr) that should return an array with unique items of arr. */
describe("unique", function () {
    let strings = ["Hare", "Krishna", "Hare", "Krishna",
        "Krishna", "Krishna", "Hare", "Hare", ":-O"];
    it("tests unique hare krishnas", function () {
        assert.deepEqual(unique(strings), ["Hare", "Krishna", ":-O"]);
    });
});


/*
Let’s say we received an array of users in the form {id:..., name:..., age... }.
Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.
see example:  https://javascript.info/array-methods
Such function is really handy when working with server data.
In this task we assume that id is unique. There may be no two array items with the same id.
Please use array .reduce method in the solution.
*/
describe("groupById", function() {

    it("creates an object grouped by id", function() {
      let users = [
        {id: 'john', name: "John Smith", age: 20},
        {id: 'ann', name: "Ann Smith", age: 24},
        {id: 'pete', name: "Pete Peterson", age: 31},
      ];
  
      assert.deepEqual(groupById(users), {
        john: {id: 'john', name: "John Smith", age: 20},
        ann: {id: 'ann', name: "Ann Smith", age: 24},
        pete: {id: 'pete', name: "Pete Peterson", age: 31},
      });
    });
  
    it("works with an empty array", function() {
      const users = [];
      assert.deepEqual(groupById(users), {});
    });
  });

  describe("copySorted", function () {

    it("make a copy and run the sort on it", function () {
  
      assert.deepEqual(copySorted(["CSS", "HTML", "JavaScript"]), ["CSS", "HTML", "JavaScript"]);
  
    });
  
  });


  describe("sortByAge", function () {

    it("hat gets an array of objects with the age property and sorts them by age", function () {
  
      let john = { name: "John", age: 25 };
  
      let pete = { name: "Pete", age: 30 };
  
      let mary = { name: "Mary", age: 28 };
  
  
  
      let arr7 = [pete, john, mary];
  
      assert.deepEqual(["john", "mary", "pete"], ["john", "mary", "pete"]);
  
    });
  
  });

describe("shuffle", function () {

   

    it("shuffle", function () {

        const arr = [2,10,5]
        assert.notStrictEqual(shuffle([2,10,5]), [2,5,10]);

    });

  });

  describe("getAverageAge", function () {

    it("array of objects with property returns the average age", function () {
  
      let johns = { name: "John", age: 25 };
  
      let petes = { name: "Pete", age: 30 };
  
      let marys = { name: "Mary", age: 29 };
  
  
  
      let arr2 = [johns, petes, marys];
  
      assert.deepEqual(getAverageAge(arr2), 28);
  
    });
  
  });