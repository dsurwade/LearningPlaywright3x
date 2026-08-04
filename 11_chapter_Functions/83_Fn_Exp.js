// 1st way
function greet(name){
    return `Hello, ${name}`;
}

// 2nd way- Function as Expression
const greet1 = function(name1){
    return `Hello, ${name1}`;
}



console.log(greet("bob"));
console.log(greet1("bob"));

