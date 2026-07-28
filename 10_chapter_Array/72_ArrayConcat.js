let a = [1, 2];
let b = [3, 4];
let c = a.concat(b);
console.log(c);

// spread (Modern way) Concatenation (...)
// ... means all the elements
let d = [...a,...b];
console.log(d);

// Join
let s = ["pass", "fail", "skip"].join(" | ");
console.log(s);