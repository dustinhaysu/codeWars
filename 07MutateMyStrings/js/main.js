// I will give you two strings. I want you to transform stringOne into stringTwo one letter at a time.

// Example:

// stringOne = 'bubble gum';
// stringTwo = 'turtle ham';

// Result:
// bubble gum
// tubble gum
// turble gum
// turtle gum
// turtle hum
// turtle ham
// STRINGS FUNDAMENTALS

function mutateMyStrings(stringOne, stringTwo){
let arr1 = stringOne.split('')
let arr2= stringTwo.split('')
let answerString = [arr1.join('')]

for(let i = 0; i < arr1.length; i++){
    if(arr1[i] !== arr2[i]) {
        arr1[i] = arr2[i]
        answerString.push(arr1.join(''))
    }
}
return answerString.join('\n')
}
console.log(mutateMyStrings('farts', 'apple'))

// split strings into arrays, loop through array1, if array1[i] !== array2[i] array1[i] = array2[i], create a third array and make it equal stringOne, add modified array to third array as string, return third array joined as one string with '\n'

