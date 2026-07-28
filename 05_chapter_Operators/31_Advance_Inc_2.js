let a =10;
console.log(++a + a + a++); // 11 + 11 + 11
console.log(a);


let i = 1;
let result = i++ + ++i;  // a= i++ (1) + b=++i (3)
console.log(result, i);  // 4, 3

let k =10;
console.log(++k + ++k);   // 11 + 12
console.log(k);

let c = 34;
let result1 = c++;   
console.log(result1);  //34
console.log(c);       //35
