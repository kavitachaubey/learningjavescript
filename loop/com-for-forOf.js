let gameboard = [[15,5],[16,4],[10,10]]
for(let i=0;i<gameboard.length;i++){
    let row = gameboard[i];
    let sum = 0;
    for(let j=0;j<row.length;j++){
        sum += row[j];
    }
    console.log(`${row} and there sum ${sum}`);
}

for(let row of gameboard){            // row [15,5],[16,4],[10,10]
    let sum = 0;
    for(let num of row){              // num 15,5    16,4  ....
        sum += num;
    }
    console.log(`${row} and there sum ${sum}`);
}