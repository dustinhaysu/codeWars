// DESCRIPTION:
// write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.

//STRINGS BINARY ALGORITHMS

function stringy(size) {
    var str='';
    for( var i=1; i<=size; i++ )
      str+=i%2;
    return str;
  }  console.log(stringy(8))

// function stringy(size){
//     binary = ""
//     for(let i = 1; i <= size; i++){
//         binary += (i % 2 === 0 ? "0" : "1")
//     }
//     return binary
// }

console.log(stringy(8))