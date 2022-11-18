// For every string, after every occurrence of 'and' and/or 'but', insert the substring 'apparently' directly after the occurrence(s).

// If input does not contain 'and' or 'but', return the same string. If a blank string, return ''.

// If substring 'apparently' is already directly after an 'and' and/or 'but', do not add another. (Do not add duplicates).

// Examples:
// Input 1

// 'It was great and I've never been on live television before but sometimes I don't watch this.'
// Output 1

// 'It was great and apparently I've never been on live television before but apparently sometimes I don't watch this.'
// Input 2

// 'but apparently'
// Output 2

// 'but apparently' 
// (no changes because 'apparently' is already directly after 'but' and there should not be a duplicate.)

// An occurrence of 'and' and/or 'but' only counts when it is at least one space separated. For example 'andd' and 'bbut' do not count as occurrences, whereas 'b but' and 'and d' does count.

// reference that may help: https://www.youtube.com/watch?v=rz5TGN7eUcM

// STRINGS FUNDAMENTALS


string = 'It was great and I\'ve never been on live television before but sometimes I don\'t watch this.'

string2 = 'but apparently and apparently'
// mine
function apparently(string) {
    let array = string.split(' ')
    for(let i = 0; i < array.length; i++){
        if(array[i] === 'but' && array[i + 1] !== "apparently"){
            array.splice((i + 1), 0, 'apparently')
        }
        if(array[i] === 'and' && array[i + 1] !== "apparently"){
            array.splice((i + 1), 0, 'apparently')
        }
    }
    return array.join(" ")
}

//refactored splice() method was unnecessary reassignment much simpler
function apparently(string) {
    var arr=string.split(' ');
    for(let i=0; i<arr.length; i++){
    if(arr[i]==='and' &&arr[i+1]!=='apparently'){
    arr[i]='and apparently';
    }
    else{
    if(arr[i]==='but'&& arr[i+1]!=='apparently'){
    arr[i]='but apparently';
    }
    }
    }
    return arr.join(' ');
  }


    
  // interesting see reduce method() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

  function apparently(string) {
    return string.split(' ').reduce((o,c,i,a)=>{
      o.push(c);
      if(c === 'and' || c === 'but')
       {
         if(a[i+1] !== 'apparently')
         { o.push('apparently') }
       }
       return o;
     },[]).join(' ');
   }

  console.log(apparently(string))

  //split() array, loop through the array. if element === and && next element !==apparently, insert apparently into the array. repeat for 'but'

  // for loop, splice()

  // splice(i, 0,"apparently") caused an infinite loop 'apparently' was inserted before 'but' increasing the array length forever 

  // splice() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice 