## Functions

Passing arguments to a function is fun as long as the number of arguments are less. The more the number of arguments are there, the more the chance of making mistake passing these arguments. It also becomes kind of repetitive to write all the arguments. e.g. a function with 3 arguments compared to a function with 20 arguments. But there is an easy way of handling a large number of arguments to any function.

### Setting default parameters

Setting a parameter to default value in Javascript is what atleast Python does, but I don\t know why everytime I hear Javascript I go numb. It is just like `args` in Python.

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

## Callback functions

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

## Hoisting

Let us understand hoisting in Javascript using a very simple example and then move onto a bit more complex example using a function call to understand.

```javascript
x = 5;
console.log(x);
let x;
```

In Javascript, variables can be defined using `var`, `let` or `const`. In the above example, we directly initialized the value of `x`, without declaring it as a variable first. Surprisingly, there was no error. When the Javascript compiler sees a variable declared to which a value has beed assigned already in the same scope, it brings the declaration to top. It is as if the Javascript compiler sees the first statement to execute as `let x;`. This is called as _hoisting_.
