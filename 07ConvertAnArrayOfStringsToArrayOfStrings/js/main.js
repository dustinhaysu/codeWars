// Oh no!
// Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

// You need to cast the whole array to the correct type.

// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

// ie:["1", "2", "3"] to [1, 2, 3]

// Note that you can receive floats as well.

// ARRAYS PARSING STRINGS FUNDAMENTALS

let stringArray = ["8","19","23.765"]

function toNumberArray(stringArray){
   return stringArray.map(str => Number(str))
   
}

console.log(toNumberArray(stringArray))

//refactor

function toNumberArray(stringarray)
{
  return stringarray.map(parseFloat);
}

//refactor

const toNumberArray = stringarray => stringarray.map(Number);