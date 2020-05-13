
 /* Find the Smallest and Biggest Numbers
 ---------------------------------------- */
/*  Create a function that takes an array of numbers
 and return both the minimum and maximum numbers, in that order.*/

 function minMax(list) {
  minList = Math.min(...list); // add "..." if you pass an array
  maxList = Math.max(...list);
  console.log("The Min of the list is " +  minList + " and the max is " + maxList);
 }

minMax([1, 2, 3, 4, 5]) // ➞ [1, 5]
minMax([2334454, 5]) // ➞ [5, 2334454]
minMax([1]) // ➞ [1, 1]