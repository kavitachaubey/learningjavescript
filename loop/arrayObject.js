let studentMarks = [
    {
        firstName : 'mikasa',
        marks:67
    },
    {
        firstName : 'eren',
        marks:76
    },
    {
        firstName : 'armin',
        marks:95
    }
]
let total = 0;
for(let i=0;i<studentMarks.length;i++){
    let student = studentMarks[i];
    total += student.marks;
}
console.log(`Avarage ${total/studentMarks.length}`)


let myName = "Kavita";
let reverseName = "";
for(let i = myName.length-1; i>=0; i--){
    reverseName += myName[i];        
    console.log(`${i} ${myName[i]}`);
}
console.log(reverseName);