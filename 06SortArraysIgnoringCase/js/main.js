//Sort the given array of strings in alphabetical order, case insensitive. For example:
// ["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
// ["C", "d", "a", "B"])              -->  ["a", "B", "C", "d"]
// ARRAYS SORTING

const a = ["Hello", "there", "I'm", "fine"]
const b = ["C", "d", "a", "B"]
// // input: names - unsorted strings
// // output: case-agnostic sort
sortme = function( names ){
    return names.sort((a, b) => a - b)
  }

  //******************************************** */

// input: names - unsorted strings
// output: case-agnostic sort
sortme = function( names ){
    return names.sort(function(first, second) {
      return first.toLowerCase().localeCompare(second.toLowerCase())
    })
  }

  console.log(sortme(b))