// 1st way
function greet(name){
    return `Hello, ${name}`;
}

// 2nd way
const greet1 = function (name1){
    return `Hello, ${name1}`;
}

// Arrow Function

// If you want to make a normal function to Arrow function
// Remove the keyword function, remove the keyword return, 
// Remove the curly braces and use arrow function =>

// 3rd way    
const greet2 = (name2) => `Hello, ${name2}`;

console.log(greet("pramod"));
console.log(greet1("pramod"));
console.log(greet2("pramod"));