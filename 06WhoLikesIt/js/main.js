// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
// 
// // // Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
// 
// // []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// // ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// // ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// // ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// // Note: For 4 or more names, the number in "and 2 others" simply increases.
//conditional names.length return string with ${names[index]} 
// @4+ ${names[index]} + ${names.length - 2}

function likes(names){
    let n = names.length;
    if(n === 0){
        return "no one likes this"
    }
    else if(n === 1){
        return `${names[0]} likes this` 
    }
    else if(n === 2){
        return `${names[0]} and ${names[1]} like this`
    }
    else if(n === 3){
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
    }
    else {
        return`${names[0]}, ${names[1]} and ${n - 2} others like this`
    }
}

// refractor to be a case statement 

// function likes(names) {
    // return {
    //   0: 'no one likes this',
    //   1: `${names[0]} likes this`, 
    //   2: `${names[0]} and ${names[1]} like this`, 
    // //   3: `${names[0]}, ${names[1]} and ${names[2]} like this`, 
    // //   4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`, 
    // }[Math.min(4, names.length)]
//   }



let testNames1 = ["Johnny", "Sammy", "Alice", "Scott", "Samantha"]  
let testNames2 = ["John", "Sam", "Carl",]
let testNames3 = ['John', 'Sam']
let testNames4 = ['John']
let testNames5 = []
console.log(likes(testNames1))
console.log(likes(testNames2))
console.log(likes(testNames3))
console.log(likes(testNames4))
console.log(likes(testNames5))


















