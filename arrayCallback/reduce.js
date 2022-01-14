const num = [2,4,6,3,2];
const multiple = num.reduce((total,currentVal) =>{
    return total*currentVal;                 //2*4 = 8....8*6=48....48*3=....
})
console.log(multiple)