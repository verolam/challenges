  
  /* Function to calculate surface
  ---------------------------------*/
  function surface(type,dim1,dim2){
     
    let result = 0;
    switch (type) {
      case "square":
      case "rectangle":
        result = dim1 * dim2;
        break;
      case "triangle" :
        result = dim1 * dim2 *0.5;
        break;
  }
     
      console.log("The area for a " + type + " is " + result + "m2");
      
  }
  
  surface("triangle",25,15);
  surface("rectangle",35,10);
  surface("square",25,10);
  
  
  