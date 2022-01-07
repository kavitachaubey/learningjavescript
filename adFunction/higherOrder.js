function add(x,y){
    return x+y;
}
function subtract(x,y){
    return x-y;
}
let multiply = function(x,y){
    return x*y;
}
let divide = function (x,y){
    return x/y;
}

let operations = [add,subtract,multiply,divide];

for(let func of operations){
    let result = func(4,5);
    console.log(result);
}

const things = {
    doOperation : multiply
}
console.log(things.doOperation(5,6));