let numbers = [10,11,12,13,14,15,16,17,18];
numbers.forEach(function(num,idx){
    console.log(idx,num);
})

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

animes.forEach(function(anime){
    console.log(anime.name.toUpperCase());
})

for(let ani of animes){
    ani.characters.forEach(function(char){
        console.log(char.toUpperCase())
    })
}

for(let i = 0; i<animes.length;i++){
    console.log(animes[i].rating)
}