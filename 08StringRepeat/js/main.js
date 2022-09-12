 /*Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
FUNDAMENTALS STRINGS*/ 

function repeatStr (n, s) {
    return s.repeat(n);
  }

// long form (loop)
  /* function repeatStr (n, s) {
var str="";
for(var i=0; i < n; i++)
  str+=s;
  return str;
} */ 


  console.log(repeatStr(17,'Tony'))
  console.log(repeatStr(89,'Where am I? I\'m over here!'))
  console.log(1000, "All work and no play makes Jack a dull dull boy. ")