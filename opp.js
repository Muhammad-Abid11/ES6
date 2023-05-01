//  8.Classes
/*    let obj={
        names2:"abdi",      <-- object remainder
        age:123
    };
    console.log(obj);
*/

/*    function Student(names,age){      //// Function's name Capital -> "S" constructor
        this.names=names
        this.age=age                    ////  ES5 constructor remainder
    }
    let student1=new Student("abid",23)
    console.log(student1);

*/

// ES6 class(     Constructor     )
/*
   class Student{
       constructor(names,age){
           this.names=names;
           this.age=age;
       }
   }
    let student1=new Student("Abid",23)
    console.log(student1);


*/

//    Merging of class also defined 1:40:00

/*

class Student {
    constructor(names, age) {
        this.names = names;
        this.age = age;
    }
}
class School extends Student {          //extends use too connect to use classes property
    constructor(names, age, school) {
        super(names, age)              //super us class sy pehly jiski property apko chahye
        this.school = school;
    }
}


let student1 = new Student("Abid", 23)
let student2 = new Student("sajid", 223, "saylani")
console.log(student1);
console.log(student2);

*/


