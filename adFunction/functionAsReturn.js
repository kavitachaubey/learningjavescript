function add(num){
    return function (x){
        return num + x;
    }
}

let addition = add(3);
console.log(addition(5));


function selectBetNum(x,y){
    return function(value){
        return value>=x && value<=y;
    }
}
let isTeen = selectBetNum(11,18);
console.log(isTeen(12));

let isAdult = selectBetNum(18,60);
console.log(isAdult(16))

let isOld = selectBetNum(61,100);
console.log(isOld(90))