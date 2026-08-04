// array literal (Preffered)

let browsers =["Chrome", "Firefox", "Webkit"];



// Array Constructor (less Preffered)
let scores = new Array(3);    // creates [empty * 3];
let scores = new Array(1, 2, 3) //creates [1, 2, 3]

let test = Array.of(10, 20, 30, 40);
console.log(test.length);

//Array.from
let chars = Array.from("hello") //["h", "e", "l", "l", "o"]
