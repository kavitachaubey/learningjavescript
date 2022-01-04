function rollDie(){
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`${roll}`);
}
rollDie();
function throwDie(numroll){
    for(let i=0;i<numroll;i++){
        rollDie();
    }
}
throwDie(6);

function greet(nickname){
    console.log(`Hi,${nickname}`);
}
greet('kabbu')