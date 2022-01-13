const numbers = [2,3,4,5,6,7,8];

const odd = numbers.filter( o => o % 2 === 1);
const even = numbers.filter( e => e % 2 === 0);

console.log(odd);
console.log(even)
//..............................................//

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

const rate = animes.filter( r => r.rating >= 8.1);
console.log(rate)

const query = 'p';
const nameInclude = animes.filter(
    n => {
        const anime = n.name.toLowerCase();
        return anime.includes(query.toLowerCase());
    }
)
console.log(nameInclude)