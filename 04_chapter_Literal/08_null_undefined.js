/*
   SIMPLE DEFINITIONS :

     undefined ->  A variable exists, but it has not been assigned any value yet.
                   JavaScript itself sets this automatically.


    null       ->. A variable exists, but the developer explicitly assign 
                   "no value" or "empty".
                   It is intentional absence of any value.

*/

var x;
console.log(x);

var audi = null;
console.log(audi);

// null
let profilePicture = null;
console.log(profilePicture);
console.log(typeof profilePicture);  // type is object

//------------------------------------------
// Key difference 
//------------------------------------------

/*
  | Feature                   | undefined                    | null
  |---------------------------|------------------------------------------------- 
  | Meaning                   | Not assigned yet             | Intentionally empty
  | Who sets it ?             | JavaScript automatically.    | Developer manually
  | Type                      | undefined                    | Object
  | == comparision            | null == undefined -> true
  | === comparision           | null === undefined -> false                    |
  |                           |
 
*/