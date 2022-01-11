// const number = num =>(                            // can't return 2 value ,only single line of code 
//      num * num
// )
// console.log(number(5));

// const value = val => val + val
// console.log(value(8));

//................................................//

let numbers = [10,11,12,13,14,15,16,17,18];

// const number = numbers.map(num =>(
//      num*num
// ))
// console.log(number)

// const number = numbers.map(num => num*num
// )
// console.log(number)

const number = numbers.map(num =>(
     (num%2===0)? 'Even':'Odd'
))
console.log(number)


const value = numbers.map(v => v % 2 === 0 ? 'Even':'Odd'
)
console.log(value)


//we can't do this

// const number = numbers.map(num =>(
//      if (num%2===0) 'Even';
//      else
//      'Odd'
// ))
// console.log(number)


