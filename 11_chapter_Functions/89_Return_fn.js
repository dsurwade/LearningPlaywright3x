function getStatus(code){
    if(code >= 200 && code < 300) return "success";
    if(code >= 400 && code < 500) return "Client Error";
    if(code >= 500) return "Server Error";
}

console.log(getStatus(200));
console.log(getStatus(404));
console.log(getStatus(500));


// Return nothing - undefined
function logTest(name){
    console.log(`Running: ${name}`);
    // no return statement
}

logTest("Hi this is a log");

function aaa(){
    return [2, 2, 3, 5];
    // return {"name" : "pramod"}; - object
}