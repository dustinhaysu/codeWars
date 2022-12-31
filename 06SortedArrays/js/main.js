// Given any number of arrays each sorted in ascending order, find the nth smallest number of all their elements.

// All the arguments except the last will be arrays, the last argument is n.

// nthSmallest([1,5], [2], [4,8,9], 4) // returns 5 because it's the 4th smallest value
// Be mindful of performance.

// ARRAYS ALGORITHMS PERFORMANCE

function nthSmallest(...arrays) {}


  function nthSmallest(...arrays) {
    const index = arrays.pop() - 1;
    return Array.prototype.concat(...arrays).sort((a, b) => a - b)[index];
  }

  console.log(nthSmallest([1,2,3], [4, 2, 8], [77, 12, 4], 8))