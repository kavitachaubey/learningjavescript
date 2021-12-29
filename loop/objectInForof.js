let  animeReviews = {
    aot : 8.5,
    naruto : 7.5,
    narutoShippuden : 9.5,
    baruto : 4,
    deathNote : 8,
}

for(let anime of Object.keys(animeReviews)){          // anime = aot ,naruto....
    console.log(anime , animeReviews[anime]);         // animeReviews[anime] = 8.5, 5, 7...
}

const rating = Object.values(animeReviews);  // rating = aot:8.5 ,naruto:9,...
let sum = 0;
for(r of rating){              // r = 8.5, 9, 7,...
    sum += r;
}
let average = sum / rating.length;
console.log(average);