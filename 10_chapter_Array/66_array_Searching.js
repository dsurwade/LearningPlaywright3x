// Searching

let result = ["pass", "fail", "pass", "error", "fail"];

//indexOf - return first index or -1 if not found

result.indexOf("fail");   //1
result.indexOf("skip");   //-1

// lastIndexOf - searches from the end
result.lastIndexOf("fail"); //4

// imcludes - return boolean
result.includes("error"); //true