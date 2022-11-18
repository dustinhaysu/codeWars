// DESCRIPTION:
// Create a function to lowercase all strings in an array. Non-string items should remain unchanged.

// Example
// arrayLowerCase(['Red', 'Green']) == ['red', 'green']
// arrayLowerCase([1, 'Green']) == [1, 'green']
// ARRAYS STRINGS FUNDAMENTALS
let arr = ['CAR', 7, false, 'FUN', 'BUNNY']

//mine
/*function arrayLowerCase(arr) {
    arr.forEach((element, index) => {
        if(typeof element === 'string'){
            arr[index] = arr[index].toLowerCase()
        }
    })
    return arr
  }*/

  //refactor
  function arrayLowerCase(arr) {
    return arr.map(element => typeof element === 'string' ? element.toLowerCase() : element);
 }
// map() with ternary expression much cleaner. map() can also apply changes to element 
  console.log(arrayLowerCase(arr))

  // loop array, if index typeof  === 'string index === toLowerCase(),