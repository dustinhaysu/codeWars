// You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.

// e.g. transposeTwoStrings(['Hello','World']);

// should return

// H W  
// e o  
// l r  
// l l  
// o d

// A few things to note:

// There should be one space in between the two characters
// You don't have to modify the case (i.e. no need to change to upper or lower)
// If one string is longer than the other, there should be a space where the character would be

let array = ['Hello', 'World!']

//*******refactored code************
function transposeTwoStrings(array){
    let result = []
    let loopLength = Math.max(array[0].length, array[1].length);
    for(let i = 0; i<loopLength; i++){
        let column = `${array[0][i]||' '} ${array[1][i]||' '}`
        result.push(column)
        /*need push() or unshift() to add to result[]array*/   
 }
    return result.join('\n')

}
console.log(transposeTwoStrings(array))

// ********my original code******
// function transposeTwoStrings (array) {
// 	let [a,b] = array
//     let loopLength = a.length>=b.length? a.length:b.length
//     a = a.split('')
//     b = b.split('')
//     let str = ''
//     for(let i = 0; i<loopLength; i++){
//         if(!a[i]){a[i]=' '}
//         if(!b[i]){b[i]=' '}
//         str += `${a[i]} ${b[i]}\n`
//     }

//     return str.slice(0,-1)
// }
// 
// console.log(transposeTwoStrings(array))
//destructure array, split strings, loop through both string arrays, template literal results, \n @ end of string

// str.slice(0, -2) didn't remove \n it removed the final \n and b[i]. assume backslash character \ doesn't slice()

