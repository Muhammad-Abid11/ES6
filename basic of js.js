// Section 2.3: Types of Variables
var a = NaN;
var b = typeof (a)
b
var c;
c


console.log(null == undefined) // true
console.log(null === undefined) // false
console.log(null == NaN) // false
console.log(undefined == NaN) // false

console.log(typeof (null)) // object
console.log(typeof (undefined)) // undefined
console.log(typeof (NaN)) // number


console.log(isNaN(NaN))
console.log(isNaN(1)); // false: 1 is a number
console.log(isNaN(-2e-4)); // false: -2e-4 is a number (-0.0002) in scientific notation
console.log(isNaN(Infinity)); // false: Infinity is a number
console.log(isNaN(true)); // false: converted to 1, which is a number
console.log(isNaN(false)); // false: converted to 0, which is a number
console.log(isNaN(null)); // false: converted to 0, which is a number
console.log(isNaN("")); // false: converted to 0, which is a number
console.log(isNaN(" ")); // false: converted to 0, which is a number
console.log(isNaN("45.3")); // false: string representing a number, converted to 45.3
console.log(isNaN("1.2e3")); // false: string representing a number, converted to 1.2e3
console.log(isNaN("Infinity")); // false: string representing a number, converted to Infinity
console.log(isNaN(new Date)); // false: Date object, converted to milliseconds since epoch
console.log(isNaN("10$")); // true : conversion fails, the dollar sign is not a digit
console.log(isNaN("hello")); // true : conversion fails, no digits at all
console.log(isNaN(undefined)); // true : converted to NaN
console.log(isNaN()); // true : converted to NaN (implicitly undefined)
console.log(isNaN(function () { })); // true : conversion fails
console.log(isNaN({})); // true : conversion fails
console.log(isNaN([1, 2]));//true : converted to "1, 2", which can't be converted to a number



// The one and only
console.log(Number.isNaN(NaN)); // true
// Numbers
console.log(Number.isNaN(1)); // false
console.log(Number.isNaN(-2e-4)); // false
console.log(Number.isNaN(Infinity)); // false
// Values not of type number
console.log(Number.isNaN(true)); // false
console.log(Number.isNaN(false)); // false
console.log(Number.isNaN(null)); // false
console.log(Number.isNaN("")); // false
console.log(Number.isNaN(" ")); // false
console.log(Number.isNaN("45.3")); // false
console.log(Number.isNaN("1.2e3")); // false
console.log(Number.isNaN("Infinity")); // false
console.log(Number.isNaN(new Date)); // false
console.log(Number.isNaN("10$")); // false
console.log(Number.isNaN("hello")); // false
console.log(Number.isNaN(undefined)); // false
console.log(Number.isNaN()); // false
console.log(Number.isNaN(function () { })); // false
console.log(Number.isNaN({})); // false
console.log(Number.isNaN([])); // false
console.log(Number.isNaN([1])); // false
console.log(Number.isNaN([1, 2])); // false
console.log(Number.isNaN([true])); // false


// Section 3.4: undefined and null

var a = "undefined"
console.log(typeof (a))
console.log(typeof undefined === a)


let foo;
console.log('is undefined?', foo === undefined);// is undefined? true


foo = { a: 'a' };
console.log('is undefined?', foo.b === undefined);// is undefined? true

foo = () => { }
console.log('is undefined?', foo() === undefined);// is undefined? true

foo = (param) => {
    console.log('is undefined?', param === undefined);
}
foo('a');
foo();


// Section 5.1: Measuring time - console.time()

console.time('response in');
alert('Click to continue');
console.timeEnd('response in');
alert('One more time');
console.timeEnd('response in');


// -----------------------------------------------


// Chapter 6: Datatypes in JavaScript


// 1. Strings
// 2. Numbers
// 3. Bool
// 4. Object
// 5. Function
// 6. Undefined

// Section 6.2: Finding an object's class


function sum(...arguments) {
    if (arguments.length === 1) {
        const [firstArg] = arguments
        if (firstArg instanceof Array) { //firstArg is something like [1, 2, 3]
            return sum(...firstArg) //calls sum(1, 2, 3)
        }
    }
    return arguments.reduce((a, b) => a + b)
}
console.log(sum(1, 2, 3)) //6
console.log("interesting this one ", sum([1, 2, 3])) //6
console.log(sum(4)) //4



// interesting Chapter topic just checkout


console.log(String.fromCharCode(104, 101, 108, 108, 111))


var objectString = new String("Yes, I am a String object");
console.log(typeof objectString);//"object"
console.log(typeof objectString.valueOf());//"string"


//Section 7.2: Reverse String


var a = "abid"
b = a.split("").reverse().join("")
b


reverse = (string) => {
    var strRev = "";
    for (var i = string.length - 1; i >= 0; i--) {
        strRev += string[i];
    }
    return strRev;
}
reverse("zebra"); // "arbez"



// Section 7.3: Comparing Strings Lexicographically

var arr = ["bananas", "cranberries", "apples"];
arr.sort((a, b) => a.localeCompare(b));
console.log(arr); // ["apples", "bananas", "cranberries"]


// Section 7.5: Escaping quotes

var text = 'L\'albero means tree in Italian';
console.log(text); //L'albero means tree in Italian




