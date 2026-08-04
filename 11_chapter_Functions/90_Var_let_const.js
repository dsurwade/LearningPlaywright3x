// var a = 10;
// console.log(a);  // 10
// // Var ---Function Scoped - Traitorz

// //Define
// function printHello(){
//     console.log("Hello Testing Academy");
//     var a = 20;
//     console.log(a);  // 20
//     if(true){
//         var a = 30;
//         console.log(a); // 30
//     }
//     console.log(a);  // according to us it should be 20 but its 30
// }

// printHello();

console.log("-------------------------")
// let - Blocked Scoped

let b = 20; //Global scope
console.log(b); // 20

//Define
function printHello(){
    console.log("Hello Testing Academy");
    let b = 30;       // Local Scope
    console.log(b);  // 30
    if(true){
        let b = 5;
        console.log(b); // 5
    }
    console.log("let ->", b);  //  30
}

printHello();
console.log(b); //20

// Let does not allow you to have Re-declaration
// let a = 10;
// let a = 20;

// Var allow you to have a Re-declaration
var a = 10;
var a = 101;

// Not allowed
// var nn = "pramod";
// let nn = "pramod";  // Not allowed

// let mm = "dik";
// var mm = "dik";    // Not allowed

const pi = 3.14
console.log(pi);
//pi = 3.14256 // Assignment to const varibale not possible

const c = [1, 2, 3];
c.push(5);     // possible
console.log(c);