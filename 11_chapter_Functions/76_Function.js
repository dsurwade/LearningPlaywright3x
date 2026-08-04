// Without functions -- repeated logic

// let score1 = 85;
// let result1 = score1 >=70 ? "pass" : "fail";
// console.log(result);

// let score2 = 40;
// let result2 = score2 >=70 ? "pass" : "fail";
// console.log(result2

// Define a function for the above
function getResult(score){
    return score >=70 ? "pass" : "fail";
}

// Calling
getResult(85);    //pass
getResult(40);    //fail