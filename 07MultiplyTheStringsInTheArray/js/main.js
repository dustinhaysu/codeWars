// You received an array with two strings. Create a function that will return their product as a string. E.g.

// arrMultiply(['9','6']) should return '54'
// FUNDAMENTALS ARRAYS STRINGS

let arr = ['7', '10']

// function arrMultiply(arr){
//     return String(Number(arr[0]) * Number(arr[1]))
    
//  }

// refactored
// any arithmetic other than addition on number strings toNumber() is automatically inferred and will return a number. 
function arrMultiply(arr){
  return  `${arr[0] * arr[1]}`
}
 console.log(arrMultiply(arr))

 //https://medium.com/swlh/strings-and-basic-mathematical-operators-in-javascript-e9de3d483dae