// Some people really wonder why JavaScript arrays don't have a remove function to remove an element.

// Go ahead and make one.

// var someArray = [1, 2, 3];
// someArray.remove(1);
// This should remove the element on index 1 making someArray = [1, 3]

// You also need to handle invalid inputs: If index is not a number or out of bounds, return the array unchanged.

// ARRAYS FUNDAMENTALS
const arr = [1, 2, 3]
let index = 1
//Array.prototype.remove = function (index){}



Array.prototype.remove = function (index) {
    if (Number.isInteger(index) && index >= 0) this.splice(index, 1);
    return this;
  };

  console.log(arr.remove(index))