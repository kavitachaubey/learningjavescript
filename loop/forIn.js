let  animeReviews = {
    aot : 8.5,
    naruto : 7.5,
    narutoShippuden : 9.5,
    baruto : 4,
    deathNote : 8,
}

for(let anime in animeReviews){
    console.log(anime);
    console.log(animeReviews[anime]);
}

let total = 0;
for(let anime in animeReviews){
    total += animeReviews[anime];
}
console.log(total);


for(let k in [3,6,8,8]){
    console.log(k);
}