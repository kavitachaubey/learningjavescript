const movies = [
    'The End',
    'Miss universe',
    'The final battle'
]

const movie = movies.find( m => m.includes('final'));
console.log(movie)

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

const rate = animes.find(r => r.rating > 8.5);
console.log(rate)

const character = animes.find(char =>(
    char.characters.includes('kageyama')
))
console.log(character)