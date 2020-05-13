
 /* Equality of 3 Values
 ----------------------------- */
 // Create a function that takes three integer arguments (a, b, c) and returns the
 //amount of integers which are of equal value. 


 function equal(int1, int2, int3 ){
        let count = 0;
        let output = "";
        
        console.log(int1, int2, int3);
        
        if (int1 === int2  ){
          count = count + 1;
        }
        if (int1 === int3 ){
          count = count + 1;
        }
        if (int2 === int3 ){
          count = count + 1;
        }
        
        output = "They are " + count  + " elements of equal value";
        console.log(output);
        }
        
        equal(3, 4, 3) // ➞ 2
        equal(1, 1, 1) // ➞ 3
        equal(3, 4, 1) // ➞ 0
        