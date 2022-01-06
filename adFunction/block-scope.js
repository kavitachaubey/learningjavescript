// if(true){
//     var cat = 'rin';
//     console.log(cat);   //can declare the variable outside the block. in VAR
// }
// console.log(cat);         

// if(true){
//     let dog = 'mau';       
//     console.log(dog);    //can't declare the variable outside the block. in LET and CONST
// }
// console.log(dog);      


//...........................................................//

// let myCat = ['rin','noah','oreo'];
// for(var i = 0 ;i<myCat.length;i++){
//     console.log(i,myCat[i]);              //can declare the variable outside the block. in VAR
// }
// console.log(i);

// let myDog = ['mau','oreo','chat'];
// for(let j = 0 ;j<myDog.length;j++){
//     console.log(j,myDog[j]);              //can't declare the variable outside the block. in LET and CONST
// }
// console.log(j);

//...............................................................//

// function doubleArr(arr){
//     const result = [];
//     for(let num of arr){
//         let double = num*2;
//         result.push(double);
//     }
//     console.log(double);       //can't declare the variable outside the block. in LET and CONST
//     return result;
// }
// console.log(doubleArr([1,4,6]))


function doubleArr(arr){
    const result = [];
    for(let num of arr){
        var double = num*2;
        result.push(double);
    }
    console.log(double);       //can declare the variable outside the block. in VAR
    return result;
}
console.log(doubleArr([1,4,6]))