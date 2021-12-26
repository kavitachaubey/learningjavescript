const student = {
    firstName : "Kavita",
    lastName : "Chaubey", 
    subject : ["Maths","Computer"],
    marks : {
        midterm: 75,
        finaterm:80
    }
}

const student2 = student;
student2.name = "Mickey";
console.log(student2);