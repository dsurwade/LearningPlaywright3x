// Immedialtly Invoked Function Expression (IIFE)
// They dont need to be called

function name1(){
    console.log("Hi");
}
name1();

// IIFE
(function(){
    console.log("Ananymous Fun");
})();

// Arrow Crazy
(() => {
    console.log("Setup complete");
})();