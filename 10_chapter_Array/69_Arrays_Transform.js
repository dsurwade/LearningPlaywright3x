let scores = [45, 82, 91, 66, 73];

let grades = scores.map(item_score => item_score > 70 ? "Pass" : "fail");
console.log(grades);

// map is generally used whenever we want to transform the array
// into a new array of the same size.

// filter
let passing = scores.filter(s => s >= 70);
console.log(passing);

//Reduce (less preffered)
let total = scores.reduce(sum, s => sum + s, 0);
console.log(total);