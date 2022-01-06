let cat = 'rin';
function changeName(){
    let cat = 'noah';
    console.log(cat);     //scope of the function.      declare inside the function.
}
changeName();
console.log(cat);