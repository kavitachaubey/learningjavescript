function multiple(x,y){
    if(typeof(y)=== 'undefined') y = 1;       //if y is undefined -- y = 1;
    return x * y;
}
console.log(multiple(3));

function intro(name,greet = 'Hey'){     // say hey -- no greet argument.
    console.log(`${greet},${name}`)
}
intro('Kavita')