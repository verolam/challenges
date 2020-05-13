
/* Loops  :  counting persons by Gender
---------------------------------------*/
// Create an array containing 6 persons, girls and boys. 
// Each person should have 2 keys, name and gender.

//Loop into the array and check how many girls and boys do you have. 
//The output should // be something like : "My list contains 2 girls and 4 boys"

let person = [
  {
    name :  "Penelope",
    gender : "female"
  },

  {
    name :  "Teresa",
    gender : "female"
  },

  {
    name :  "Rocky",
    gender : "male"
  },

  {
    name :  "Mireille",
    gender : "female"
  },

  {
    name :  "Mehdy",
    gender : "male"
  },
];

function NumGender (){
  let numM = 0; // number of Boys
  let numF = 0; // number of girls
  let output = "";
  let length = person.length;

  for (let i=0; i < length; i++){
 
  if (person[i].gender == "male" ){
    numM = numM + 1;
  } 
  else if (person[i].gender == "female" ){
    numF = numF + 1;
  } 
  }

  output = "My list contains " + numF + " girls and "+ numM + " boys";
  console.log(output);
}

//call of the function
NumGender();