function callThreeTimes(f){
    f();                               //f is a function.  f(),action(),...
    f();
    f();
}

function happy(){
    console.log("I'm so Happy...");
}

function sad(){
    console.log("I'm so sad...")
}
// callThreeTimes(happy);
// callThreeTimes(sad);


function withLoop(action,num){
    for(let i=0;i<num;i++){
        action(); 
    }
}
// withLoop(happy,13);


function withRandom(f1,f2){
    let rand = Math.random();
    console.log(rand);
    (rand <= 0.5)? f1() : f2();
}
withRandom(sad , happy);

