const num = [45.75,45.00,80.00,74.00,200];
console.log(num.sort())

const copyNum = num.slice().sort();

const ascenSort = num.slice().sort((a,b) => a-b);         // a = 74 , b = 200     74 - 200 = -126  === a comes before b
const decenSort = num.slice().sort((a,b) => b-a);         // if a is greater than b === b comes before a;

console.log(ascenSort);
console.log(decenSort);

//..................................................//
let animes = [
    {
        name : 'Your name',
        characters : ['mitsuka','taki'],
        rating: 8.3
    },
    {
        name : 'Attack on titan',
        characters : ['mikasa','eren'],
        rating: 8.5
    },
    {
        name : 'Naruto Shippudin',
        characters : ['naruto','sasuke'],
        rating: 9.5
    },
    {
        name : 'Haiku',
        characters : ['Hinata','kageyama'],
        rating: 8.3
    }
]

const rate = animes.slice().sort();
const rateSort = animes.slice().sort((a,b) => a.rating - b.rating)
console.log(rateSort)