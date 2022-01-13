const threeLetter = ['dog','lot','dig','bag','wig'];

const letter = threeLetter.every(word => word.length === 3);               //true
console.log(letter)

const endsWith = threeLetter.every(end => end[end.length-1] === 'g');      //false
console.log(endsWith)

//..........................................................................//

const nonLiving = ['table','chair','mirror','book'];

const nonLivingLen = nonLiving.some( l => l.length === 4);               //true
console.log(nonLivingLen)

const endsWithR = nonLiving.some( r => r[r.length-1] === 'r')            //true
console.log(endsWithR)