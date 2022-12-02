// Write a function that takes two arguments, and returns a new array populated with the elements that only appear once, in either one array or the other, taken only once; display order should follow what appears in arr1 first, then arr2:

// hotSingles([1, 2, 3, 3], [3, 2, 1, 4, 5]) // [4, 5]
// hotSingles(["tartar", "blanket", "cinnamon"], ["cinnamon", "blanket", "domino"]) // ["tartar", "domino"]
// hotSingles([77, "ciao"], [78, 42, "ciao"]) // [77, 78, 42]
// hotSingles([1, 2, 3, 3], [3, 2, 1, 4, 5, 4]) // [4,5]
// SPECIAL THANKS: @JulianKolbe !

// ARRAYS LISTS ALGORITHMS

const arr1 = [77, "ciao"]
const arr2 = [78, 42, "ciao"]

//function hotSingles(arr1, arr2) {}

//**************************************************************** */

function hotSingles(arr1, arr2) {
    var newArr = [];  
    for(var i=0;i<arr1.length;i++)
    {
      if(!newArr.includes(arr1[i]) && !arr2.includes(arr1[i]))
      {
        newArr.push(arr1[i]);
      }
    }
    for(var i=0;i<arr2.length;i++)
    {
      if(!newArr.includes(arr2[i]) && !arr1.includes(arr2[i]))
      {
        newArr.push(arr2[i]);
      }
    }
    return newArr;
  }

  console.log(hotSingles(arr1, arr2))