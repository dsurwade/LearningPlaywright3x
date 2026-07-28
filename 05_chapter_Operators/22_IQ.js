let actualStatusCode = 200;
let expectedStatusCode = 200;
let testResult = actualStatusCode === expectedStatusCode ? "PASS" : "FAIL";
console.log(testResult);

//another example

let enviroment = "staging";
let baseurl = enviroment === "prod" ? "https://api.example.com" : "https://stagging-api.example.com";
console.log(baseurl);

//another example
let isCI = true;
let browserMode = isCI ? "headless" : "headed";
console.log("Launching browser in:", browserMode, "Mode");