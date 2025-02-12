

// falsy values are
//  0 , " " , undefined , null, NaN , false


// FIRST-CLASS FUNCTIONS Intro

/*

const greeting = () => `Hello`
// debugger; show step by step in console
console.log("function body", greeting)
console.log("Function output-->", greeting())

const a = () => console.log("Drink Water");
// setInterval(a, 2000);// it runs every 2sec

const sayHello = function () {
    return function () {
        console.log("Hello")
    }


console.log("1 function without paranthesis", sayHello)
console.log("2 function with paranthesis", sayHello())
console.log("3 function with double paranthesis", sayHello()())

*/

// --------------------x---------------

// Exit Loop

// by -->break

/*
let a = [1, 2, 3, 4, 5, 6]
for (const value of a) {
    console.log("values stop by Break -->", value);
    if (value == 3) {
        break;
    }
}

// by-->.some

let arr = [1, 2, 3, 4, 5, 6];
arr.some(number => {
    console.log("some-->", number);
    return number > 2
})
   */
// koye statement true hoye too loop exit



// by-->.every


/* let arr3 = [1, 2, 3, 4, 5, 6];
arr3.every(number => {
    console.log("every-->", number);
    return number < 3



})
 */
// --------------------x---------------




// what is difference between "copy by Value" and "Copy by Reference"

// In "copy by value," a new memory location is created and the value of the
// original variable is copied to the new location. The two variables then have
// separate memory locations and any changes made to one will not affect the
// other. In "copy by reference," a reference to the memory location of the
// original variable is copied, so the two variables refer to the same
// memory location. Any changes made to one will affect the other.

// Example

/*
// Copy by value & Deep Copy
let x = 5;
let y = x;
x += 1;
console.log(x);  // 6
console.log(y);  // 5

// Copy by reference & Shallow Copy
let a = { value: 5 };
let b = a;
a.value += 1;
console.log(a.value);  // 6
console.log(b.value);  // 6


//  Object.assign() method actually gets modified and returned.
//  So make sure that you pass the object to copy at least as the second argument.
//  Normally, you would just pass an empty object as the
//  first argument to prevent modifying any existing data.

let c = Object.assign({}, a);
c.value = 4
console.log(a.value);
console.log(c.value);

 */

// In the first example, x and y are primitive data types, and when
// we assign x to y, it creates a new memory location for y and copies
// the value of x to y. So changing value of x does not affect the value of y.

// In the second example, a and b are objects, and when we assign a to b,
// it assigns the reference of a to b. So both a and b are pointing to
// the same memory location. Changing the value of a will affect the value
// of b as they are pointing to the same memory location




// https://www.freecodecamp.org/news/copying-stuff-in-javascript-how-to-differentiate-between-deep-and-shallow-copies-b6d8c1ef09cd/

// --------------------x---------------

//      "this"

/*
var person = {
    firstName: "Penelope",
    lastName: "Barrymore",
    fullName: function () {
        // Notice we use "this" just as we used "he" in the example sentence earlier?:
        console.log(this.firstName + " " + this.lastName);
        // We could have also written this:
        console.log(person.firstName + " " + person.lastName);
    }
}
person.fullName()

var person2 = {
    firstName: "Penelope",
    lastName: "Barrymore",
    // Since the "this" keyword is used inside the showFullName method below, and the showFullName method is defined on the person object,
    // "this" will have the value of the person object because the person object will invoke showFullName ()
    showFullName: function () {
        console.log(this.firstName + " " + this.lastName);
    }
}
person2.showFullName();

console.log(this)

let value = 345;
obj = {
    value: 123,
    name: "Talal",
    foo: function () {
        return this.name
    }
}
let a = obj.foo()
a
 */

// ----------------x-------------



// For In

// The For In statement iterates over all
// enumerable properties of an object.


// For of

// The For of statement creates a loop
// iterating over iterable objects.



//////for In & For OF------->object

/*

const object = {
    name: "Abid",
    roll: 23
}

for (let prop in object) {
    console.log(`the prop  "${prop}" contains value ${object[prop]} `)
    //agar ap direct ${object} likhengy to output nhi ayega.
}

*/

////For Of not work in Object

////ForEach not work in Object


//Alert
// object property get in-> prop & its value in -> object[prop]  <- like array
// object per "For In" work krta hai "For Of" nhi krta.



//////for In $ For OF------->Array

/*
const arr = ["a", "b", "c"];
console.log(`For in  display both Index,Values`)
for (const prop in arr) {
    console.log(`the prop index ${prop} and value at ${arr[prop]}`);
    //agar ap direct ${arr} likhengy to complete array display hogi.
}

console.log(`For of only display Values and not work in objects`)
for (const prop of arr) {
    console.log(`the prop value ${prop}`);
    //agar ap direct ${arr} likhengy to complete array display hogi.
}

arr.forEach((element, index) => {
    console.log(`forEach--> ${index} and ${element}`)
});

*/

//// .some      -->Return true if at least one element in the array returns
// true from the function passed to some Check if any element is greater than 1.

/*

let arr = [1, 2, 3, 4, 5];
console.log(arr.some(n => n > 2));

 */

////.every -->Return true if every element in the array returns
//true from the function passed to every Check if every element is greater than 1

/*

let arr = [1, 2, 3, 4, 5];
console.log(arr.every(n => n > 1));

*/


////.reduce  Reduce the array to one single value by starting the sum at the
// second value passed to reduce and updating the sum with the return
// value of each iteration Sum all the numbers in the array starting with 0


/*
let arr = [1, 2, 3, 4, 5];
console.log(arr.reduce((a, b) => a - b))
console.log(arr.reduce((a, b) => a - b,0)) // ??
console.log(arr.reduce((a, b) => a + b))
console.log(arr.reduce((a, b) => a + b,1))
console.log(arr.reduce((a, b) => a * b))
console.log(arr.reduce((a, b) => a * b,2))

 */

//function reducer(accumulator/total, currentValue, index,array){

//,initial_value}



////    flat        -->concat sub-array too single array

/*

let arr = [1, 2, [3, 4], 5];
console.log("Normal array", arr);
console.log("Flat Array", arr.flat());

*/


////    find--->returned that matched

/*
let arr = [
    { type: "A", game: "football" },
    { type: "B", game: "cricket" },
    { type: "C", game: "Hockey" }
]
let game = arr.find((s) => s.type === "B");
console.log(game);


////    findIndex



let arr2 = [
    { type: "A", game: "football" },
    { type: "B", game: "cricket" },
    { type: "C", game: "Hockey" }
]
    game = arr2.findIndex((s) => s.type === "C");
console.log(game);

 */



//--------------x---------------------------        Sorting Methodes

/*

// Sort of Alphabets

let arr2 = ["learn", "abid"];
console.log(`array--> ${arr2}`)
console.log(`.sort() sort AtoZ --> ${arr2.sort()}`)

// Sort of Numbers


let numArr = [10, 3, 44, 55, 100];
console.log(`numberArr--> ${numArr}`)
console.log(`sorting of number--->${numArr.sort()}`)
// upper k case me sort work nhi kryga q k sork 1st value ko dekh k sorting krta hai. so hum condition use krengy
console.log(`sorting of number--->${numArr.sort((a, b) => a - b)}`)
//if you want to sort numeric values you need to pass callback Function
console.log(`sorting of number--->${numArr.sort((a, b) => b - a)}`)
//if you want to sort numeric values you need to pass callback Function


// Sort of Numbers& Alphabets


let items = ["item4", "item2", "item1", "item3"]
console.log(items)
const sorted = items.sort((a, b) => {
    return +a.slice(-1) - +b.slice(-1)
})
console.log(sorted)


// Sorting Logic Down

let arr = [1, 5, 3, 2, 4];
let sortedArr = arr.sort((a, b) => {
    if (a > b) {    //means a 2nd value and b 1st value hai
        return 1;    //agar return 1 kro means switch kro
    } else {
        return -1;  //agar return -1 k mtlb easahi rehne do
    }

})

sortedArr; //1,2,3,4,5
let reverseArr = sortedArr.sort((a, b) => -1);
reverseArr

*/

/* 

let numArr = [10, 3, 44, 55, 100];
numberArr--> 10,3,44,55,100

Why does this happen?
.sort() treats elements as strings by default.
It compares them based on Unicode code points rather than numeric values.
"10" comes before "3" because "1" is less than "3" in Unicode

How does this work?
The comparison function (a, b) => a - b sorts the numbers correctly.
.sort() iterates over the array and compares each pair of numbers using:
If (a - b) < 0 → a comes before b
If (a - b) > 0 → b comes before a
If (a - b) === 0 → order remains unchanged

*/

//-----------------------x-----------------------

/* 
//Function Scope
function loop() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log("final", i); // returns final 5
}
// block Scope
function loop2() {
    for (let i = 0; i < 5; i++) {
        // can access i here
        console.log("final", i);
        // returns an error here due to "let"
    }

}
//  1
//  2
//  3
//  4
//  final 5
loop()
loop2();
// ReferenceError: i is not defined


 */


// Let and Const
// Trying to access a let or const variable before it is declared
// or outside of its block without returning it will result in a Reference Error

//--------------x---------------------------




// Immediately Invoked Function Expression or more simply IIFE is a JavaScript function
// that runs as soon as it is defined.Can also be referred to as a Self - Executing Anonymous Function.

// Grouping Operator () creates a lexical scope
// (function () {
// statements
// })();

// Immediately invokes the function with 2nd set of ()

// Takeaways: Avoid polluting the global namespace or scope when possible.

//--------------x---------------------------


// Function Execution Context creates arguments object
function showArgs(arg1, arg2) {
    console.log('arguments showArgs: ', arguments);
    ////arguments <-keyword for parameters
    return `argument 1 is: ${arg1} and argument 2 is: ${arg2}`; //parameter return

}
showArgs("hello", "world");

// arguments: { 0: 'hello', 1: 'world' }
// argument 1 is hello and argument 2 is world
function noArgs() {
    console.log('arguments noArgs: ', arguments);
    //arguments <-keyword for parameters
}
noArgs();
// arguments: {}
// even though there are no arguments, the object is still created



// Alert

// The keyword arguments can be dangerous to use in your code as is.In ES6, a few
// methods were introduced that can help better use arguments

//--------------x---------------------------

/*

function showArgs(arg1, arg2) {
    console.log("arguments in object: ", arguments);
    console.log("arguments in Array", Array.from(arguments));

    Args("hello", "world");
// arguments: { 0: 'hello', 1: 'world' }
// [ 'hello', 'world' ]
function showArgs2(...args) {
    console.log("arguments in 2nd object: ", args);
    console.log(Array.from(arguments));
    return `${args[0]} ${args[1]}`;



let returnD = showArgs2("hello", "world");
console.log(`return Data--> ${returnD}`)
// arguments: [ 'hello', 'world' ]
// [ 'hello', 'world' ]
// hello world

*/


// Alert

// The keyword arguments can be dangerous to use in your code as is.In ES6, a few
// methods were introduced that can help better use arguments

//--------------x---------------------------

// 'this' keyword

/*

var name = "Fatema";

function fun() {
    // some code here
    console.log(this.name); //work on browser not in vscode terminal

    t user = {
    name: "Marium",
    yearOfBirth: 1999,
    calcAge: function () {
        const currentYear = (new Date()).getFullYear();
        console.log(currentYear - this.yearOfBirth);


    ); // 'this' is global. Logs "Fatema"
user.calcAge(); // 'this' is the user object
fun.call(user); // 'this' is the user object. Logs "Marium"

*/

//--------------x---------------------------


//////////////////// .call .bind  .apply
// maybe they are JUST apply on object or in Methods(function in object)


/*

// .call example
//// syntax       doSomething.call(object,arg1,arg2...)

let display = {
   show: function (para1, para2) { //<----Method
       console.log(`fullname is --> ${this.firstName} ${this.lastName}  ${para1} ${para2}`)
   }


let data = {
   firstName: "Abid",
   lastName: "Khan",


display.show.call(data, "value1", "Value2");

*/


//--------------x---------------------------



// .apply() The apply() method is similar to the call() method

// The call() method takes arguments separately.
// The apply() method takes arguments as an array.
//// syntax       doSomething.apply(object,array)
/*

let display = {
    show: function (para1, para2) { //<----Method
        console.log(`fullname is --> ${this.firstName} ${this.lastName}  ${para1} ${para2}`)
    }


let data = {
    firstName: "Abid",
    lastName: "Khan",


display.show.apply(data, ["value1", "Value2"]);

*/

//--------------x---------------------------


// .bind----> With this method, an object can borrow a method from another object

/*

let display = {
    firstName: "Sajid",
    lastName: "Ahmed",
    show: function () { //<----Method
        return `fullname is --> ${this.firstName} ${this.lastName} `
    }

    ole.log(display.show())

let data = {
    firstName: "Abid",
    lastName: "Khan",


let dis = display.show.bind(data);
console.log(dis)

*/

// Alert
// bind k result function ki body arahi hai to sahi sy smj nhi aya just
// ye join kr rha hai



//--------------x---------------------------.call/.apply/.bind new example

// syntax
//  const bound =doSomething.bind(object)
// bound(arg1,arg2...)

/*

    t u1 = {
    id: 1,
    DOB: '1988-12-12'
}
const u2 = {
    id: 2,
    DOB: '2003-6-12'
}
const currentYear = new Date().getFullYear()
const u1Year = new Date(u1.DOB).getFullYear()
const u2Year = new Date(u2.DOB).getFullYear()
const calcAge = (currentYear, userYear) => (currentYear - userYear);

// console.log(calcAge(currentYear, u2Year));
console.log("call-->", calcAge.call(u1, currentYear, u2Year))
console.log("Apply-->", calcAge.apply(u1, [currentYear, u1Year]))

const bound = calcAge.bind(u1Year)
console.log("Bind--->", bound(currentYear, u2Year))

*/


//--------------x---------------------------




// OOP's

/*

class Student {
    constructor(name, age) { // constructor function apne ap call hoten hen jb ap class banao
        this._name = name;  // inka use hum class me initialization ya property define k liye use krten hen
        this._age = age;    //
    }
    helloMethod() {     // ye prototype methods hoten hen iska constructor me koye bhi value ho inki calculation k liye
        console.log(this._name)
        return "Hi"
    }
    static staticMethod() { //ye ap a.staticMethod kr k use nhi sakty isy direct use kro
        console.log("Hi Static")
    }
}

let a = new Student("Abid", 2)
console.log(a)
console.log(a.helloMethod())
Student.staticMethod()

*/

// Inheritance


/*


class employee {
    constructor(name, age, salary) { //agar nichy class me constructor nhi hoga too manager class yhn k constructor ko use kryga
        this.empname = name;
        this.empage = age;
        this.empsalary = salary;
        console.log(`Constructor : Employee `);
    }
    info() {
        console.log(`Employe Name : ${this.empname} salary ${this.empsalary} age ${this.empage}`)
    }
}
class manager extends employee {
    info() {
        let ta = 1000;
        let pa = 1000;
        let totalSalary = ta + pa + this.empsalary;
        console.log(`Manager Name : ${this.empname} age ${this.empage} salary ${totalSalary}`)
        super.info();// iski wajah sy upper k info bhi ap run kr sakty ho
    }
}
let a = new manager("yahoo Baba", 21, 22300)
let b = new employee("Shiekh Shiekh", 11, 300)
a.info();
b.info();

*/
