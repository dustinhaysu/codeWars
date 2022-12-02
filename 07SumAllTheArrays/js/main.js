// You are given an array of values.
// Sum every number value in the array, and any nested arrays (to any depth).
// Ignore all other types of values.
// RECURSION ARRAYS FUNDAMENTALS
const arr = [[1, 2, [1, 3, 2]], 6]
function arraySum(arr) {}

  //********************************************* */


  function arraySum(arr) {
    return arr.reduce((n, x) => n + (Array.isArray(x) ? arraySum(x) : Number.isNaN(x) ? 0 : x), 0)
  }

  //while loop arr[counter] counter = 0, total = 0 if(Array.isArray){arrSum(arr[x] += value)}, array[counter]===number += value, counter++, return value 
 
function arraySum(arr) {
    let counter = 0;
    let value = 0;
    while(arr[counter]){
        if(Array.isArray(arr[counter])===true){
            value += arraySum(arr[counter])
        }
        if(typeof arr[counter]==='number'){
            value += arr[counter]
        }
        counter++
    } return value
} 

console.log(arraySum(arr))
