
/* LOOP :  Filter out Strings from an Array
-------------------------------------- */
/* Create a function that takes an array of non-negative 
integers and strings and return a new array without the strings. */

function filterArray(list2) {
  let i = 0;
  let list3 = []; // new array with only integer
  
  for (i=0; i < list2.length ; i++)
    if (Number.isInteger(list2[i])) {
      
      list3.push(list2[i]); // add integer in the list
     
    } 
    
    list2 = list3; // new list2 with only integer
    console.log(list2);
    
  }
  
  filterArray([1, 2, "a", "b"])   // ➞ [1, 2]
  filterArray([1, "a", "b", 0, 15]) // ➞ [1, 0, 15]
  filterArray([1, 2, "aasf", "1", "123", 123]) // ➞ [1, 2, 123]

