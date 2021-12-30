function rollDie(){
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`${roll}`);
}
rollDie();
function throwDie(){
    rollDie();
    rollDie();
    rollDie();
    rollDie();
    rollDie();
}
throwDie();