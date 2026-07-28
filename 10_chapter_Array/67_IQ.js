let nums = [10, 25, 30, 45];
let result = nums.find(temp => temp > 20);
console.log(result);

// find index
let index = nums.findIndex(n => n > 20);
console.log(index);

let findlast = nums.findLast(n => n > 20);
console.log(findlast);

let findlastindex = nums.findLastIndex(n => n > 20);
console.log(findlastindex);