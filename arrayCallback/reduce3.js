const votes = ['y','n','y','y','y','n','y','n','n','y','n','y','y'];

 // tally[val] = y 
 // 1. y = 0    else -- y = 1;
 // 2. y = 1 because of else  --       n = 0          else -- n =1;  
 // 3. y = 1, n = 1 because of else -- y = 1          if (y=1) -- y++ -- y =2;
 // 4. y = 2, n = 1 bacause of if --   y = 2          if (y=2) -- y++ -- y =3

const count = votes.reduce((tally,val)=>{
    if(tally[val]) tally[val]++;                   
    else tally[val] = 1;
    return tally;
},{})           //tally = {}
console.log(count)

//.......................................................................//

// 1. tally[val] = y = 0  --- y = 0 +1 = 1 --- y = 1
// 2. tally[val] = n = 0  --- n = 0 +1 = 1 --- n = 1
// 3. tally[val] = y = 1  --- y = 1 +1 = 2 --- y = 2 ......

const vote = votes.reduce((tally,val)=>{
    tally[val] = (tally[val] || 0) + 1;
    return tally;
},{})           //tally = {}
console.log(vote);

//.....................................................//
let animes = [
    {
        name : 'Your name',
        characters : ['mitsuka','taki'],
        rating: 8.3
    },
    {
        name : 'Attack on titan',
        characters : ['mikasa','eren'],
        rating: 8.5
    },
    {
        name : 'Naruto Shippudin',
        characters : ['naruto','sasuke'],
        rating: 9.5
    },
    {
        name : 'Haiku',
        characters : ['Hinata','kageyama'],
        rating: 8.3
    }
]

// if groupedanimes[rate] have a new no. make an array   -- groupedanime[rate] = 8 --[anime of 8 rating]
// if groupedAnimes[rate] is equal to 8 than push it in  -- array of 8 rating anime...

const sequenceRate = animes.reduce((groupedAnimes,anime) =>{
    const rate = Math.floor(anime.rating);
    if(!groupedAnimes[rate]) groupedAnimes[rate] = [];           
    groupedAnimes[rate].push(anime);
    return groupedAnimes;
},{})
console.log(sequenceRate)