function getCard(){
    const values =[
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        'k',
        'q',
        'j',
        'a',
    ]
    const validx = Math.floor(Math.random()*values.length);
    const value = values[validx];

    const suits = ['clubs','spades','hearts','diamonds'];
    const suitidx = Math.floor(Math.random()*suits.length);
    const suit = suits[suitidx];
    
    console.log( `value : ${value} \nsuit :${suit}`);
}
getCard();
//............................................................//

function pick(arr){
    const pidx = Math.floor(Math.random()*arr.length);
    return arr[pidx];
}

function getCard(){
    const values =[
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        'k',
        'q',
        'j',
        'a',
    ]
    const suits = ['clubs','spades','hearts','diamonds'];

    console.log( `value = ${pick(values)} \nsuit = ${pick(suits)}`);
}
getCard();