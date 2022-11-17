// Given 2 strings, your job is to find out if there is a substring that appears in both strings. You will return true if you find a substring that appears in both strings, or false if you do not. We only care about substrings that are longer than one letter long.

// #Examples:

// *Example 1*
// SubstringTest("Something","Fun"); //Returns false

// *Example 2*
// SubstringTest("Something","Home"); //Returns true
// In the above example, example 2 returns true because both of the inputs contain the substring "me". (soMEthing and hoME)
// In example 1, the method will return false because something and fun contain no common substrings. (We do not count the 'n' as a substring in this Kata because it is only 1 character long)

// #Rules: Lowercase and uppercase letters are the same. So 'A' == 'a'.
// We only count substrings that are > 1 in length.

// #Input: Two strings with both lower and upper cases. #Output: A boolean value determining if there is a common substring between the two inputs.

// STRINGS ALGORITHMS

let str1 = "We\'re going to party like it\'s 1999"
let str2 = "It\'s my party and I\'ll cry if I want to"
// best practice
function SubstringTest(str1, str2) {
     [str1, str2] = [str1.toLowerCase(), str2.toLowerCase()]
    return str1.substring(0, str1.length - 1).split('').some((element, index) => str2.indexOf(element + str1[index + 1]) > - 1)
}
//substring() prevents str1 from being converted into an array. technically not necessary for this exercise
//or
/*function SubstringTest(str1, str2){
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  for(let i = 0 ; i < str2.length-1; i++){
     if(str1.indexOf(str2.substring(i,(i+2)))>-1)
       return true;
  }
  return false;
}*/
console.log(SubstringTest(str1, str2))

//str2.length-1 ensures final substring value is two characters instead of one


//Array.prototype.indexOf() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

//String.prototype.substring()  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring

// Array.prototype.some()  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some