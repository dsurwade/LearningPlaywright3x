let a = 100;
console.log(a++ + ++a + a++ + ++a); //100 + 102 + 102 + 104
console.log(a);
/* explanation : a++ -> 100 but a = 101
                 ++a -> 102 but a = 102
                 a++ -> 102 but a = 103
                 ++a -> 104 but a = 104
*/

//another example
let i = 37;
console.log(--i + i--);    //36 + 36
console.log(i);
/* explanation : --i -> 36 but i = 36
                 i-- -> 36 but i = 35
*/

//another example
let p = 5;
let q = p-- - --p;    // 5 - 3
console.log(q, p);