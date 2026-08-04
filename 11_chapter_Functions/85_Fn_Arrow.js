function doubleMe(a){
    return a*2;
}

const doubleA = (a) => a*2;
console.log(doubleA(10));

const getEnv = () => "staging";
console.log(getEnv());


// Multiline functions
const getResult = (score) => {
    if(score > 70)return "Pass";
    return "fail";
}
console.log(getResult(78));
console.log(getResult(34));