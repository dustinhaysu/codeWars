// vowel count 7kyu

// Return the number (count) of vowels in the given string.
// 
// // We will consider a, e, i, o, u as vowels for this Kata (but not y).
// 
// // The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let vowels = ['a','e','i','o','u'];
  let onlyVowels = str.split('').filter(letter => vowels.includes(letter))
  let vowelCount = onlyVowels.length
  console.log(vowelCount)
}