let gameboard = [
    [45,5,8,4],
    [4,7,8,5],
    [68,5,8,4],
    [4,6,7,8]
]

let total = 0;
console.log(gameboard);
for(let i=0;i<gameboard.length;i++){
    let row = gameboard[i];
    console.log(row);
    for(let j=0;j<row.length;j++){
        console.log(row[j]);
        total += row[j];
    }
}
console.log(total);