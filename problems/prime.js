let num = 3;
let isPrime = true;
for(let i=2;i<num;i++){
    if(num%i==0){
        isPrime = false;
    }
}
if(num==1){
    console.log('Not Prime number')
}
else if(isPrime){
    console.log('Prime number')
}
else{
    console.log('Not Prime number')
}