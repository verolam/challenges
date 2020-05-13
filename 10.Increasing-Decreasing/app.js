
 /* Strictly Increasing or Decreasing
 ----------------------------------------*/
 //Create a function that takes an array and determines whether it's strictly 
 //increasing, strictly decreasing, or neither.
 
 function check(arr){
 let output = "";
 
 for (let i=0; i<= length ; i++){
   if ( (arr[i] < arr [i+1]) && (arr[i+1] < arr[i+2])){
     output = "increasing";
   }
   else if ( (arr[i] > arr [i+1]) && (arr[i+1] > arr[i+2])){
     output = "decreasing";
   }
   else output = "neither"
   }
 
   console.log("The array [" + arr + "] is " +  output);
 }
 
 check([1, 2, 3]) // ➞ "increasing"
 check([3, 2, 1]) // ➞ "decreasing"
 check([1, 2, 1]) // ➞ "neither"
 check([1, 1, 2]) // ➞ "neither"