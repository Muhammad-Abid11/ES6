// https://www.youtube.com/watch?v=9T4z98JcHR0&t=1267s
"use strict"

// 1.this in global space 
console.log("1 this", this)//globalObject - window, global
//it represent global ,it means where you are running your code and that global area is 
//represent by "this" keyword 

// 2.
let count = 2
function x() {//also globalObject

    //------here the value of "this" depends on "strict" / "non strict mode"

    console.log(count++, "this inside a function -->", this)
    //when "use strict" --> valueOf     "this" willbe "undfined" 
    //when "non use strict" --> valueOf "this" willbe "global" 
}
x()//"undefined" if "strict"



// 3."this" keyword value depends on how the function is called (windows)
// window.x()//"window"




// 4."this" inside a object's method
const obj = {
    a: 10,
    x: function () {
        console.log("4.'this' in a object normalfunction represent it body", this)
        console.log("object 'a' value--> ", this.a)
    }
}
obj.x()


// 5."call" is used to share "methods/function inside an object" 

const student = {
    name: "Ali",
    printName: function () {
        console.log(this.name)
    }
}
student.printName()//ali

const student2 = {
    name: "Sara"
}

student.printName.call(student2)//sara //here now becomes value of this=student2



//6. this inside arrow function
//arrow function don't provide their own "this" binding
//it retains the value of " 'enclosing' 'lexical' 'context' "(means k us code ko likha khn gaya hai)

const obj1 = {
    a: 10,
    x: () => {
        console.log("this inside object arrowFunction-->", this)//global
    }
}
obj1.x()


const obj2 = {
    a: 10,
    x: function () {
        //enclosing lexical context
        const y = () => {
            console.log("this inside obj2", this)
        }
        y()
    }

}
obj2.x()

//
//this inside DOM elements => refrence to HTMLelements

//this inside class,constructor and //no defined