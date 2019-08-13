/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding - When in the global scope or inside of a function but not an object,
*    "this" will be bound to the "window object" within the browser. 
*
* 2. Implicit Binding - Or Implied binding is when a function(or method) is called inside of an object. The "this" keyword 
*    will be bound to the object to the left of the "."(dot) when called. (exampleObjThisWillBeCalledTo.call();)
*    
* 3. New Binding - Happens when a 'new' instance of a constructor function is called and the 'this' will be bound
*    to the new object that is created.
*
* 4. Explicit Binding - Happens when a .call, .apply, or .bind method is used on an already initialized object. 'This'
*    will be bound to the new arguments passed in with the .call, .apply, or .bind.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

function window() {
  console.log(this);
  return "Window binding of 'this' example."
}

// Principle 2
// code example for Implicit Binding

const impliedBinding = {
  greeting: 'Hello',
  sayHello: function(name) {
    console.log(this);
    console.log(`${this.greeting}, ${name} this is an example of implicit binding!`);
  }
};

impliedBinding.sayHello('Denton');


// Principle 3
// code example for New Binding

function NewBinding(name) {
  this.greeting = 'Hello',
  this.name = name,
  this.sayHello = function() {
    console.log(this);
    console.log(`${this.greeting}, ${this.name} this is an example of "new" binding!`);
  }
};

const denton = new NewBinding('Denton');
denton.sayHello();

// Principle 4
// code example for Explicit Binding

const bob = new NewBinding('Bob');
denton.sayHello.apply(bob);
