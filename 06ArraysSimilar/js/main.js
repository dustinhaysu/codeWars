// Write a function that determines whether the passed in arrays are similar. Similar means they contain the same elements, and the same number of occurrences of elements.

// const arr1 = [1, 2, 2, 3, 4],
//       arr2 = [2, 1, 2, 4, 3],
//       arr3 = [1, 2, 3, 4],
//       arr4 = [1, 2, 3, "4"]

// arraysSimilar(arr1, arr2); // Should equal true
// arraysSimilar(arr2, arr3); // Should equal false
// arraysSimilar(arr3, arr4); // Should equal false
// ARRAYS ALGORITHMS
const arr1 = [1, 2, 2, 3, 4]
const arr = [2, 1, 2, 4, 3]
const arr3 = [1, 2, 3, 4]
const arr2 = [1, 2, 3, "4"]


function arraysSimilar(arr1, arr2) {
    arr1 = arr1.sort(sortFunc);
    arr2 = arr2.sort(sortFunc);
    return arr1.length == arr2.length && arr1.every((a,i) => a === arr2[i]);
  }
  
  function sortFunc(a,b) {return a-b;}

console.log(arraysSimilar(arr1, arr2))