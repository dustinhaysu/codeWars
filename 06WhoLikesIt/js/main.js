/* You probably know the "like" system from
posts, pictures or other items. We want to 
an item.
 Implement the function which takes an arra
item. It must return the display text as sh
 [] -->  "no one likes this"
["Peter"] -->  "Peter likes this"
["Jacob", "Alex"] -->  "Jacob and Alex like
["Max", "John", "Mark"] -->  "Max, John and
["Alex", "Jacob", "Mark", "Max"]  -->  "Ale
Note: For 4 or more names, the number in "a
conditional names.length return string with
@4+ ${names[index]} + ${names.length - 2}*/

function likes(names){
    let n = names.length;
    if(n === 0){
        return "no one likes this"
    }
    else if(n === 1){
        return `${names[0]} likes this` 
    }
    else if(n === 2){
        return `${names[0]} and ${names[1]} 
    }
    else if(n === 3){
        return `${names[0]}, ${names[1]} an
    }
    else {
        return`${names[0]}, ${names[1]} and
    }
}

/*refractor to be a case statement*/ 
/*
function likes(names) {
  names = names || [];
  switch(names.length){
    case 0: return 'no one likes this'; break;
    case 1: return names[0] + ' likes this'; break;
    case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
    case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
    default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
  }
}
*/


/*Test*/

let testNames1 = ["Johnny", "Sammy", "Alice
let testNames2 = ["John", "Sam", "Carl",]
let testNames3 = ['John', 'Sam']
let testNames4 = ['John']
let testNames5 = []
console.log(likes(testNames1))
console.log(likes(testNames2))
console.log(likes(testNames3))
console.log(likes(testNames4))
console.log(likes(testNames5))
