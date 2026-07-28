let arr = [ 1, 2, 3];
console.log(arr);

// Add to END
arr.push(4);
console.log(arr);

// Remove from END
arr.pop();
console.log(arr);

// adding again
arr.push(4, 5);
console.log(arr);

// Add to BEGINING
arr.unshift(0);
console.log(arr);

// Remove from BEGINNING
arr.shift();
console.log(arr);

// Deletion in middle
arr.splice(2, 1);       // at index 2, remove one element
console.log(arr);

// Insertion in middle
arr.splice(2, 0, 99);    // at index 2, dont remove anything (0), insert 99
console.log(arr);

arr.splice(1, 1, 10, 20); // at index 1, remove 2 element, and add 10 & 20
console.log(arr);

