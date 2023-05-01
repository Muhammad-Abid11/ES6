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



//--------------x---------------------------        Linked test JS

/*

let animals = [{ type: "lion" }, "tiger"];
let clones = animals.slice();

clones[0].type = "bear";        //ye original ko bhi edit kryga
clones[1] = "sheep";            //ye original ko edit nhi kryga  :/


console.log(animals[0].type, clones[0].type);
console.log(animals[1], clones[1]);

// Alert

// Upper Type wala dono me change ho rha hai q k "type" as a refrence ban rha hai dono k liye
// jbhi 1 me change too dono me change

*/

//--------------x---------------------------        Linked test JS

/*

let cat = { type: "tiger", size: "large" };
let json = JSON.stringify(cat)                  //{ "type": "tiger", "size": "large" }
// let json = JSON.stringify(cat, ["type"])        //{"type":"tiger"}
console.log(json);
let jsonStr = JSON.parse(json)
console.log(jsonStr);

*/

//--------------x---------------------------        Linked test JS

/*

// example internet
const person = {
    isHuman: false,
    printIntroduction: function () {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
};

const me = Object.create(person);   //Object.create--> create instanse of object that already create upside

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction();
// expected output: "My name is Matthew. Am I human? true"

*/


/*


//      now test

let cat = Object.create({ type: "lion" });      //ye type ki kuch nhi kryga too "cat" empty object hoga
// console.log(cat)                         //empty object
cat.size = "large";                         // new value add
let copyCat = { ...cat };                   //copy
cat.type = "tiger";                         //easi koye property cat me nhi hai too kuch nhi hoga
console.log(copyCat.type, copyCat.size);    // jbhi copyCat.type ->undefined


*/


//--------------x---------------------------        Linked test JS

/*

var thing;
let func = (str = 'no arg') => {
    console.log(str);
}
func(thing);   //thing=undefined so str=no arg
func(null);     //str=null
func("Abid")    //str="abid"


*/

//--------------x---------------------------        Linked test JS

/*

let score = [];
score.push(1, 2);
score.pop();
score.push(3, 4);
score.pop();
score = score.reduce((a, b) => a + b);
console.log(score);     //4

*/

//--------------x---------------------------        Linked test JS
// by chatGPT

// what will this code log to the console?

/*

console.log(typeof (42.1));

*/

//--------------x---------------------------        Linked test JS
// by chatGPT

/*

which line gives error ?
    1 const lion = 1;
2 let tiger = 2;
3 var bear;
4
5 ++lion;
6 bear += lion + tiger;
7 tiger++;

The line number 5 "++lion;" will give an error because "const" variables cannot be re - assigned new values.The "++" operator is trying to re - assign a new value to the lion constant variable, which is not allowed.
So line number 5 will give an error.

*/

//--------------x---------------------------        Linked test JS
// by chatGPT

/*

what statement can be used to skip an iteration in a loop ?
    a) skip
b) continue
c) next
d) break

b) continue

The continue statement can be used to skip an iteration in a loop.When the continue statement is executed inside a loop, the current iteration of the loop is terminated and the next iteration starts.It is commonly used in combination with conditional statements to skip certain iterations of a loop based on certain conditions.

Option a) skip is not a statement in javascript
Option c) next is not a statement in javascript
Option d) break is used to exit a loop entirely, not just skip an iteration.

*/

//--------------x---------------------------        Linked test JS
// by chatGPT
/*

Here's an example of a generator function:

Copy code
function* generatorFunction() {
    yield 1;
    yield 2;
    yield 3;
}

let iterator = generatorFunction();
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
In this example, the generatorFunction is defined using the "function*" syntax, and it uses the "yield" keyword to return three different values (1, 2, and 3) over time. When the generatorFunction is called, it returns an iterator object, which we assign to the variable "iterator". We can then use the "next()" method of the iterator object to control the execution of the generator function. Each time the "next()" method is called, the generator function resumes its execution from where it left off, and the next "yield" statement is executed. The returned object from the next() method has two properties, a value and a done. The value is the result of the yield statement and done is a boolean which is false if the generator has more yields or true if the generator has reached the end.

In this example, the first call to iterator.next() returns an object with the value of 1, and done set to false, meaning that the generator function has not finished executing yet. The second call returns an object with the value of 2, and done set to false, and the third call returns an object with the value of 3, and done set to false. The final call to iterator.next() returns an object with the value of undefined, and done set to true, indicating that the generator function has finished executing.


*/
//--------------x---------------------------        Linked test JS
// by chatGPT

/*

which statemen correctly imports this code from some - file.js ?
//some-files.js
export const printMe = str => console.log(str);

a) import printMe from './some-file';
b) import default as printMe from './some-file';
c) const printMe =import './some-file';
d) import { printMe } from './some-file';

d) import { printMe } from './some-file';

// The correct statement is "d) import { printMe } from './some-file';" because it correctly uses
//  the import keyword followed by the curly braces {} to import the printMe export from
// the some-file.js module. The statement uses the correct syntax to import a named export.
// Option a) and b) is not correct because it is trying to import a default export,
//  but the code in some-file.js is exporting a named export 'printMe'
// Option c) is not correct because it's missing import keyword before the path of the module.

*/

//--------------x---------------------------        Linked test JS
// by chatGPT

/*

A = () => {
    console.log(ans);
    let ans = 1;
};
A();
A();

*/


// options
// 1 then 1
// 1 then undefined
// undefined then 1
// undefined then undefined



//--------------x---------------------------        Linked test JS

/*
let value1 = 2;
let value2 = 4;
value1 *= value1 + (value2 * value2) / value1; //4*4=>16/2=>8+2=>10*2=>20
console.log(value1);

// check
// let value3 = 3;
// value3 *= 6;
// console.log(value3);

*/

//--------------x---------------------------        Linked test JS

/*

var items = ["ball", "bat", "cat", "football"];
items.pop();
console.log(items.pop());   //guess output xD

*/

//--------------x---------------------------        Linked test JS

/*

if (true) {
    var first = "you";
}
function fScope() {
    var sec = "got this!";
}

fScope();
console.log(first); //you
console.log(sec);   //reference Error

*/



//--------------x---------------------------