function add ( a, b, c){
    return a+b+c;
}

let num = [1, 2, 3, 4];
console.log(add(...num));

//------------

function hasError(...codes){
    return codes.some(c => c >= 400);
}

let responseCodes = [200, 204, 404];
console.log(hasError(...responseCodes));