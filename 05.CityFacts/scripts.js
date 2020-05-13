 
  /* Function Cities with facts using an object
  ---------------------------------*/
  // Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties:
  // The argument passed to the function is an Object
  

  function cityFacts(arg){
    console.log(arg.name + " has a population of " + arg.population + " and is situated in " + 
   arg.continent);
  }
  
  
  cityFacts({
    name: "Paris",
    population: "2,140,526",
    continent: "Europe"
  }) // "Paris has a population of 2,140,526 and is situated in Europe"
  
  cityFacts({
    name: "Tokyo",
    population: "13,929,286",
    continent: "Asia"
  }) // "Tokyo has a population of 13,929,286 and is situated in Asia"
  
  
  