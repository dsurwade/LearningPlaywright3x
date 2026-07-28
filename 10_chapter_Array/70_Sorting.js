let fruits = [ "banana", "apple", "cherry"];
fruits.sort();
console.log(fruits);  // sorting will be alphabetically by default

let score = [4, 1, 5];
console.log(score.sort());

let nums = [10, 1, 21, 2];
nums.sort();
console.log(nums);  // natural sorting

// proper sorting
//Ascending
let num = [10, 1, 21, 2];
num.sort((a,b) => a-b);
console.log(num);

//Descending
num.sort((a, b) => b-a);
console.log(num);

// reverse
num.reverse();
console.log(num);