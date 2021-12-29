const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);
while(true){
    if(target === guess)break;
    console.log(`Target:${target} \n Guess:${guess}`);
    guess = Math.floor(Math.random() * 10);
}
console.log(`Target:${target} \n Guess:${guess}`);
console.log(`Congrats you WIN!!`);