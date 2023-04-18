//Search Questions by " Questions "

// -------------x------------

// Var Scope Questions
/*

var uName = "Ali";
function Sh() {
    var uName = "Dani"
    console.log(uName);
}
Sh()
console.log(uName);

 */


// -------------x------------

// Scope Questions

/*

let x = "lol";
let y = {
    string: 234 // because it is not defined by var,let,const.
    // so its scope is global and when page render it moves on " top "
}
console.log(y[typeof x])

 */


// -------------x------------

// Var-let-const Scopes Questions

/*
if (true) {
    var uname = "abid";
    let age = 20;
    const skill = "java"
}
console.log(uname)
console.log(age)
console.log(skill)
 */


// Yes, that's correct. You should be able to log the value of `uname` outside of
//  the block because `var` has function-level scope, but you will
//  get a ReferenceError when trying to log `age` and `skill`
//  because they were declared using `let` and `const`, which have block-level scope.

// -------------x------------

// Rest Parameter/Operator


/*
const numbers = [1, 2, 3, 4, 5, 6];
const [s, b, ...c] = numbers;
console.log(s, b, c);
console.log(`C value--> ${c} and c.length ${c.length}`) //  c=[3]

 */


/*

let restof;
[x, y, ...restof] = [10, 20, 30, 40, 50]
restof

 */

// -------------x------------


// Object.Keys/Value/entries
/*

var ct1 = {
    name: "Abid",
    url: "URL.com"
}
t = Object.keys(ct1).length;
console.log(t);
console.log(Object.keys(ct1))
console.log(Object.values(ct1))
console.log(Object.entries(ct1))

 */

// -------------x------------

// Object-Questions

/*

var person = {
    name: "Dani",
    sport: "cricket",
    age: 12
}
console.log(person["age"])
// console.log(person[age])// wrong

*/


//-----------x-------------

/*

// Spread Operator in Object
// Spread Question
let obj1 = {
    key1: "value1",
    key2: "value2"
}

let obj2 = {
    key3: "value3"
}

let obj3 = {
    key4: "value4",
    obj2,
    ...obj1
}
obj3

 */

// -------------x------------

//  Object Destructure

/*

const objj = {
    p: 42,
    q: true
}
const { p, q } = objj //object Destructure
console.log(p)       //p,q
console.log(q)


// const {p:foo,q:bar}=objj //object Destructure with rename
// console.log(foo)
// console.log(bar)

 */
// -------------x------------

// Console Questions

/*

const x = "lol";
const y = "color:red";
console.log(`%c ${x}`, `${y}`) // output of console Red

 */

// -------------x------------

// Console Questions

/*

const print = console.log;
print("hello,world2");

*/



// -------------x------------

// Try Catch

/*

let c = 10;
try {
    console.log(c);
} catch (error) {
    console.log("error");

} finally {
    console.log("ok")
}

*/

// -------------x------------

/*

// Function Questions

function multiplier(factor) {   //default Values
    return number => number * factor;
}
let twice = multiplier(11);
console.log(twice(1))

 */

// -------------x------------

// For-Of

/*

const array222 = ['a', 'b', 'c']
for (const element of array222) {
    console.log(element)
}

 */

// -------------x------------


// let a333 = "ise1";
// const foo = () => {
//     b = "user2";
//     var c = "user3"
// }
// console.log(b)
// console.log(a333)
// console.log(c)
// // foo()

// -------------x------------

// FOR In   Questions
/*

var company = {
    name: "Pnaa",
    mp: 2000,
}
var txt = "";
for (key in company) {
    // console.log(key)
    // console.log(company[key])
    txt += company[key]
}
console.log(txt)

*/

// -------------x------------
// lexical scope

/*

function outer() {
    const x = 10;
    function inner() {
        console.log(x);
    }
    inner();
}
outer();

*/

// -------------x------------


// Scope Const
// const only excess inside the parentheses

/*

function outer() {
    const yy = 11;
}
function inner() {
    console.log(yy); // ReferenceError: x is not defined
}

outer();
inner();

*/

// -------------x------------

