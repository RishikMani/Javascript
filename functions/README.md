## Functions

Passing arguments to a function is fun as long as the number of arguments are less. The more the number of arguments are there, the more the chance of making mistake passing these arguments. It also becomes kind of repetitive to write all the arguments. e.g. a function with 3 arguments compared to a function with 20 arguments. But there is an easy way of handling a large number of arguments to any function.

### Setting default parameters

Setting a parameter to default value in Javascript is exactly like `*args` in Python.

```javascript
function getName(firstName = "Rishik", lastName = "Mani") {
  console.log(`The fulle name of the user is ${firstName} ${lastName}.`);
}
getName();
```

### Using rest parameters

If the number of arguments being passed to the function is not known, one can use a special parameter called as _rest parameter_. The syntax uses the same 3-dot operator. This _rest parameter_ is what exactly `kwargs` in Python do.

```javascript
function sumOfNumbers(...numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  console.log(sum);
}
sumOfNumbers(1, 2, 3, 4, 5);
```

### Using the arguments object

Another way to access any number of arguments passed to a function is to use the arguments object.

```javascript
function sumOfNumbers() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log(sum);
}

sumOfNumbers(1, 2, 3, 4, 5);
```

**The arguments object resembles an array but is not an array. It only has access to array's _length_ property.**

### Callback functions

When a function is passed as an argument to another function, the function being passed as an argument is called the callback function while the function to which argument is being passed is called as the outer function.

```javascript
function greetTheUser(name) {
  return `Hey ${name}, I wish you are doing good!`;
}

function getTheUser(callback) {
  let firstName = "Rishik";
  return callback(firstName);
}

getTheUser(greetTheUser);
```

### Hoisting

Let us understand hoisting in Javascript using a very simple example and then move onto a bit more complex example using a function call to understand.

```javascript
function print() {
  x = 5;
  console.log(x);
  var x;
}
print();
```

The above function would log `5` on the console but how does it happen when there was no declaration of `x`. In the function block the compiler later sees definition of `x`. This definition of `x` is pulled over to the top. This is called hoisting. _Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope._

```javascript
x = 5;
console.log(x);
let x;
```

The above example would rather result in a `ReferenceError`. It is because variables defined with `let` and `const` are hoisted to the top of the block, _but not initialized_. The block of code is aware of the variable, but it cannot be used until it has been declared. While using a `const` variable before it is declared will result in a syntax error.

```javascript
var x = 5;
console.log(x + y);
var y = 7;
```

This example too will fail as Javascript does not hoist initializations.

**But as a developer I find this very confusing and would rather never even try to do that. I cannot think of a use case where I would want to initialize the value first and later declare the variable.**

### Defining function expressions

```javascript
const square = function (number) {
  return number ** 2;
};

console.log(square(5));
```

Unlike function declarations, function expressions are not hoisted.

### Writing anonymous functions as arrow functions

```javascript
const square = (number) => {
  return number ** 2;
};

console.log(square(5));
```

Did you observe the very slight difference between a function expression and an arrow function? You just drop the keyword `function` and after the arguments parentheses include an arrow `=>` sign. It would still be called the same way as any other function expression.

### Simplifying arrow functions

If the arrow function contains either of a single parameter or just a single return statement, it could further be simplified. The `square` arrow function that we already defined, could be simplified as follows:

```javascript
const square = (number) => number ** 2;
```

Arrow functions do not have an arguments object. If one needs to write an arrow function that takes arbitrary number of arguments it could rather be done using `(...args)`.

## Methods

A function inside an object is called as method.

```javascript
const student = {
  firstName: "",
  lastName: "",
  fullName: function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    console.log(`The full name of the student is ${firstName} ${lastName}.`);
  },
};

student.fullName("Rishik", "Mani");
console.log(`Student's first name is ${student.firstName}`);
```
