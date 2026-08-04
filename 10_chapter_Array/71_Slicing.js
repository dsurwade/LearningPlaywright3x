// Slice & Combining

let arr = [ 1, 2, 3, 4, 5];
//slice(start, end) - returns new array, 
// does not mutate actual -> (start, end-1) index=0
//Dont give the end, it will automatically take from start to end

console.log(arr.slice(1, 3));
console.log(arr);
console.log(arr.slice(2));

console.log(arr.slice(-2));  //move right side only
console.log(arr.slice(-3));

console.log(arr.slice(0));

console.log(arr.slice(-5));

console.log(arr.slice(-3, -5));// cant go left only move right side
