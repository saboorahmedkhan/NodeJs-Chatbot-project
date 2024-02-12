import inquirer from "inquirer";

class Student {
    name:string
    constructor(n:string){
        this.name=n
    }
};

class Person{
    students:Student[]=[];

    addStudent(obj:Student){
        this.students.push(obj)
    }
}
const persons = new Person();
const programStart = async(persons:Person) => {
    do{
        console.log("Welcome guest")

    const ans = await inquirer.prompt({
        type:"list",
        message:"Aap kis set bat kerna pasand karen gey..",
        name:"select",
        choices:["khud se:self", "student"],
    });

    if(ans.select == "khud se:self"){
        console.log("Hello mein khod sey baat ker raha hoon")
        console.log("Meri Tabiat aachi hey")
    }
    if(ans.select == "student"){
        const ans = await inquirer.prompt({
            type:"input",
            message:"Aap ko kis student sey baat kerni hey",
            name:"student",
        });
        const student = persons.students.find(val => val.name == ans.student)

        if(!student){
            const name = new Student(ans.student);
            persons.addStudent(name)
            console.log(`Hello I am ${name.name}, and I am fine`);
            console.log(persons.students)
        }
        if(student){
            console.log(`Hello I am ${student.name}, and I am fine..............`);
            console.log(persons.students)
        }
    };
    }
    while(true)
};

programStart(persons)