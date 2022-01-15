const numbers = [57,67,45,34,89];

// const maxNum = numbers.reduce((max,currVal) => {
//     if(currVal > max) return currVal;
//     return max;
// })
// console.log(maxNum)

// const minNum = numbers.reduce((min,currVal) => {
//     if(currVal < min) return currVal;
//     return min;
// })
// console.log(minNum)
//...........................................................//

const maxNum = numbers.reduce((max,currVal) => {
    return Math.max(max,currVal)
})
console.log(maxNum)

const minNum = numbers.reduce((min,currVal) => {
    return Math.min(min,currVal)
})
console.log(minNum)
//.........................................................//

const nums = [4,6,57,7,6].reduce((num,currentVal)=>{
    return num+currentVal;
},1000)
console.log(nums)
