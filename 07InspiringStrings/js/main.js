// When given a string of space separated words, return the word with the longest length. If there are multiple words with the longest length, return the last instance of the word with the longest length.

// Example:

// 'red white blue' //returns string value of white

// 'red blue gold' //returns gold

// STRINGS FUNDAMENTALS

let a = "a 1 first bb 22 ccc 333 lastt dddd 4444"

longestWord = stringOfWords => stringOfWords.split(' ').reduceRight((a,b)=>(b.length > a.length) ? b : a);
console.log(longestWord(stringOfWords))

//or//

function longestWord(stringOfWords){
    return stringOfWords.split(' ').sort((b, a) => b.length - a.length).pop();
 }

  //or//

  function longestWord(stringOfWords){
    return stringOfWords.split(' ').reverse().sort((a,b) =>  b.length - a.length)[0];
  }

//or//

const longestWord = stringOfWords => stringOfWords.split(' ').reduce((s,n)=> s.length > n.length ? s : n,'')
// '' set up an initial value of empty string





console.log(longestWord(stringOfWords))