// This time the input is a sequence of course-ids that are formatted in the following way:

// name-yymm
// The return of the function shall first be sorted by yymm, then by the name (which varies in length).

// SORTING ARRAYS ALGORITHMS STRINGS

const courses = ['aeb-1305', 'site-1305', 'play-1215', 'web-1304', 'site-1304', 'beb-1305']

const compare = (a, b) => a.slice(-4) - b.slice(-4) || a.localeCompare(b);
const sortme = (courses) => courses.sort(compare);

console.log(sortme(courses))