// Create a function strCount (takes an object as argument) that will count all string values inside an object. For example:

// strCount({
//   first: "1",
//   second: "2",
//   third: false,
//   fourth: ["anytime",2,3,4],
//   fifth:  null
//   })
//   //returns 3
// STRINGS ARRAYS FUNDAMENTALS






const obj = {
    first: "1",
    second: "2",
    third: false,
    fourth: ["anytime",2,3,4],
    fifth:  null
    }

    function strCount(obj){
        // Your code here
        let numberOfStrings = 0;
        for(key in obj){
            if(typeof obj[key] === 'string') {
                numberOfStrings ++
            }
            if(typeof obj[key] === 'object'){
                numberOfStrings += strCount(obj[key])
            }
            
        }
        return numberOfStrings
        }

console.log(strCount(obj))    
