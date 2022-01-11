let numbers = [10,11,12,13,14,15,16,17,18];

const number = numbers.map(function(num){
    return num;
})
console.log(number);

const inFuntion = numbers.map(function(n){
    return {
        value : n,
        triple : n*3,
        isEven : n%2 == 0,
    }
})
console.log(inFuntion)

//.............................................//


const words = ['strict','strike','stick','stole'];

const word = words.map(function(w){
    return w.toUpperCase().split('').join('*');
})
console.log(word)

words.map(function(wor){
    console.log(wor.toUpperCase())
})