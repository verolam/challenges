 
/* Function calculate profit
---------------------------------*/
// The argument (arg)  is an object !!!!

function profit(arg){

let result = 0;
result =  ( arg.sellPrice * arg.inventory) - (arg.costPrice * arg.inventory) ;
result = Math.round(result);
console.log(result);
return result;
}


profit({
  costPrice: 32.67,
  sellPrice: 45.00,
  inventory: 1200
}) // ➞ 14796

profit({
  costPrice: 225.89,
  sellPrice: 550.00,
  inventory: 100
}) // ➞ 32411

profit({
  costPrice: 2.77,
  sellPrice: 7.95,
  inventory: 8500
}) // ➞ 44030



