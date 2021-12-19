// for(let i=1;i<=10;i++){
//     for(let j=1;j<=i;j++){
//         process.stdout.write('*');
//     }
//     console.log();
// }

for(let i=1;i<=10;i++){
    for(let k=10;k>=i;k--){
        process.stdout.write(' ');
    }
    for(let j=1;j<=i;j++){
        process.stdout.write('*');
    }
    console.log();
}