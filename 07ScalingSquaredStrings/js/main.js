// Example: 2-vertical scaling of s: => "abcd\nabcd\nefgh\nefgh\nijkl\nijkl\nmnop\nmnop"
// Function scale(strng, k, v) will perform a k-horizontal scaling and a v-vertical scaling.

// Example: a = "abcd\nefgh\nijkl\nmnop"
// scale(a, 2, 3) --> "aabbccdd\naabbccdd\naabbccdd\neeffgghh\neeffgghh\neeffgghh\niijjkkll\niijjkkll\niijjkkll\nmmnnoopp\nmmnnoopp\nmmnnoopp"
// Printed:

// abcd   ----->   aabbccdd
// efgh            aabbccdd
// ijkl            aabbccdd
// mnop            eeffgghh
//                 eeffgghh
//                 eeffgghh
//                 iijjkkll
//                 iijjkkll
//                 iijjkkll
//                 mmnnoopp
//                 mmnnoopp
//                 mmnnoopp
// Task:
// Write function scale(strng, k, v) k and v will be positive integers. If strng == "" return "".
// FUNDAMENTALS STRINGS
// split() @ \n will make an array of letter blocks
// repeat() will repeat a string
//

let strng = 'abcd\nefgh\nijkl'
let k = 5
let n = 2

function scale(strng, k, n) {
    if (strng === '') return ''
  let rows = strng.split('\n').map(row => row.split('').map(char => char.repeat(k)).join(''))
  console.log(rows)
    let res = []
    rows.forEach(row => {
        for (let i = 0; i < n; i++) {
            res.push(row)
        }
    })
    return res.join('\n')
}











console.log(scale(strng, k, n))