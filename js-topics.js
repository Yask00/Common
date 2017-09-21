// create a for llop that iterates up to 100 while 
// outputting "fizz" at multiples of 3, "buzz" at multiples
// of 5 and "fizzbuzz" at multiple of 3 and 5
    // for (let i = 1; i <= 100; i += 1) {
    //     if (i % 3 === 0 || i % 5 === 0) {
    //         if (i % 3 === 0 && i % 5 === 0) {
    //             console.log(i + ' fizzbuzz');
    //         }
    //         else if (i % 3 === 0) {
    //             console.log(i + ' fizz');
    //         }
    //         else if (i % 5 === 0) {
    //             console.log(i + ' buzz');
    //         }
    //     }
    // }

// explain event delegation
	// JS event listeners fire not only on a single DOM
	// element, but on all its descendants
	// el on <ul> alson on <li>

// describe event bubbling
	// events on element will bubble up and also fire
	// on all parents (bubble vs capture)

// explain why the following doesnt work as an IIFE
	// function foo() {
	// 	// CODE
	// }();
	// 	put ( and ) at start and before () = expression

// explain hoisting
	// all variables with var are declared at the top of function scope 
	// const and let are not hoisted

// what is the difference between a variable that is null/undefined/undeclared
	// const could not be undefined/undeclared
	// null is nothing value, null typeof is object

// what is the difference between == and === (comparison operators)
	// equality and equality/type check
	// let foo;
	// const bar = null;
	// console.log(foo == bar) // true

// what is the difference between var and let keywords
	// let is introduced since es2015/6
	// let has  block scope
	// var has function scope
	// var gets hoisted at the top of function/file

// can we modify const ( no if reassign it, yes of modify it)
	// no if const foo = 'bar' const = 'bar1'
	// yes if object/array const arr = [1, 2]; arr.push(3);

// what is prototypal inheritance
	// every object has a property called prototype, where you can add properties to it

// difference between fn declaration and expression
	// declaration type and scope, expression cannot be called before set

// what is promises and why we use it
	// we want async call waiting somethig to happen then when its come back we handle it with callback FN

// setTimeout stuff
	// setTimeout(function() {
	// 	console.log('a');
	// }, 0);
	// console.log('b');
	// console.log('c');
	// // OUTPUT b => c => a
	// setTimeout is asynchronous

// what is closure and how we use it
	// when a fn returns another fn, the returning fn will hold its variables

// -----------------------------------------Form My Stuff-----------------------------------------

// Data Types
    // primitives
        // number
        // string
        // boolen
        // undefined
        // null
    // 
        // array <-> object

// Operators
    // arithmetic + - * / % ++ --
    // logical && || ^ !
    // binary & | ^ ~ << >> >>>
    // comparison == != < > <= >= === !===
    // assignment = += -+ *= /= %= |= ^= <<= >>=
    // concatenation +
    // other . [] ?:

// !! turns any type to boolean
    // !!1 is true
    // !!0 is false

// Referent types

// Object wrapper cases ( like string.length )

// Parameters vs arguments
    // function test (a, b) { ... PARAMETERS
    // test(1,2) ... ARGUMENTS

// this
    // is the object that owns the current code

// Babel
    // transpiles newer javascript to standart, like compile in C#

// FUNCTIONS
    // they are first class objects
    // every fn has 2 implicit parameters (arguments, this)
    // types of declaration
        // function declaration
        // function expression
        // function constructor

// module - result from IIFE 

// Scope
    // in functions
    // global

// Closure
    // function having acess to the parent scope, even after the parent fn has finished

// Promises
    // old way
        // Javascript is single threded
        // callbacks is a way to asynchronous programming - fn object is passed to another fn ( setTimeout/setInterval, event handlers) with nesting

    // Promises
        // no callbacks in fns 
        // new Promise ( res, rej) // callback with 2 fn 
        // Promise is object, representing feature value 
        // .then method returns a promise 

// SOA 
    // doesnt return .html but like .json, the client visualize it 
// SPA
    // get data from services and visualize it
// Restful Web services 
    // all resources/url/services
// Ajax
    // through client we use api on server through HTTP

// -----------------------------------------------------------------------------------------------


// 1.) What is the return type of logical operators (||, &&)? 
//  If the candidate answers 'Boolean', I ask them to explain, how does "var a = a || {};" work. 
//  var a = a || {}; works as undefined || obejct (falsy || truthy)

// 2.) How is the length of an array determined? What will be the output of this code?
// var a = []; 
// a[10] = 5; 
// console.log(a.length); // answer 11
// a[-1] = 5; 
// console.log(a.length); // answer 11

// 3.) Do we get keys from the prototypes of an object in the for..in loop? Why don't we get the properties of Object, like 'toString'?
// Yes keys, for of gets properties

// 4.) Explain the behavior of the keyword 'this'? 
// A function's this keyword behaves a little differently in JavaScript 
// In most cases, the value of this is determined by how a function is called. 

// 5.) What happens if you invoke a constructor, but forget to add keyword 'new' before it? 
// undefined

// 6.) How many times can we call 'then' on the same promise? What will happen in this code:
// var a = callServer();
// a.then(...);
// a.then(...);

// What happens if we call 'then' on a promise that was already resolved before? 

// 7.) What is a closure? Most people know the practical aspects, but have a probelm explaining it, so here it is best just to ask for code sample. 