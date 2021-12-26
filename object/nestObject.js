const student = {
    firstName : "Kavita",
    lastName : "Chaubey", 
    subject : ["Maths","Computer"],
    marks : {
        midterm: 75,
        finaterm:80
    }
}

console.log((student.marks.midterm + student.marks.finaterm)/2);

const items =  [
    {
        product:"maggi",
        price:10,
        quantity:2
    },
    {
        product:"atta",
        price:70,
        quantity:1
    }
]

console.log(items.product)