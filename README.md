# Javascript

This project is my very first attempt to get my hands dirty with Javascript. The project would start from very basic Javascript and would hopefully extend by including a couple of frameworks, i.e. Vue.Js.

## Comments

There are different ways comments can be added in Javascript files.

1. Single line: It starts with `//`.
2. Block comment: starts with `/*` and ends with `*/`. It is usually used at the top of the file or for defining a function.

## Variables

One can use `let` to create a variable. Javascript developers no longer prefer declaring variables using the keyword `var`. The convention for choosing the name of variables is to follow camelCase.

```javascript
let num = 10;
```

As opposed to `let`, one can also use `const` to create a variable. The only difference between `let` and `const` is that a variable declared using `const` cannot have a different value assigned to it or in other words, `const` variable value remains constant and can not be changed. A `const` variable should be named using UPPER_SNAKE_CASE.

```javascript
const THRESHOLD = 5.75;
```

Javascript is a loosely typed language and the type of data that a variable holds need not be told. Javascript is also a dynamically stored language which implies that the type of data stored in a variable can be changed.

```javascript
let num = 10;
num = "It now holds a string";
```

To check what type of value is stored in a variable one could use `typeof` operator.

### Using a templateliteral string

```javascript
let age = 34;
let name = "Rishik Mani";

// earlier this statement would have been written using + operator
let description = `${name} is ${age} years of age.`;
console.log(description);
```

### Working with string functions

There are some interesting functions one can have a look at, but mostly they are abundantly clear by their names.

1. `charAt(int)`
2. `concat(str, str)`
3. `indexOf(char)`
4. `split(,)`
5. `substring(int, int)`

```javascript
let name = "Rishik Mani";
// the first index is larger than the second, so the function reverses them
console.log(name.substring(10, 5));
```

6. `slice(int, int)`: It works exactly like `substring` but returns an empty string if the first index is greater than the second index.
7. `replace(str, str)`: It replaces the first string with the second string.
8. `toLowerCase()`
9. `toUpperCase()`

## Data types

Javascript has the following data types: object, undefined, boolean, number, bigint(n), string and symbol. If a variable is declared but no value is assigned to it, it would by default be an undefined type of variable.

## Loop

The looping in Javascript gets a little interesting as we have some unique ways of looping over the values. There are some new loops as follows:

1. for ... in: For this loop I am including an HTML page which shows a small example. Although, this is not extensively used, but could prove very helpful while debugging.
2. for ... of

```javascript
const numbers = {1, 2, 3, 4};
for (let number of numbers) {
    console.log(number);
}
```

This could also be used to iterate over all the characters in a string.

## Arrays

Arrays are quite beautiful in Javascript and can contain any data type. An array can have an array as its element as well. If an array is defined by using `const`, the array is immutable but the elements of array are mutable.

```javascript
const arr = [1, 2, 3];
arr = [2, 3, 4]; // this would fail, as arr is immutable
arr[1] = "red"; // this would not break as the elements of the array are mutable
```

Adding an element to the array in Javascript is kind of really bad.

```javascript
const arr = [1, 2, 3];
const arr[10] = 11;  // this will add an element 11 at index 10, but from index 3 to 9 all values would be undefined
console.log(arr[7]);
console.log(arr.length);
```

This array with a lot of undefined elements within is called a sparse array. To delete an element from an array is also a really bad way, where you can assign a new value to the array's length property. If the element to be deleted is somewhere within the array, one could also use `delete` but this would just replace that element with `undefined` and create a sparse array.

```javascript
const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.length);
arr.length = 5; // this would resize the array and the element 6 would be removed
delete arr[2]; // this would leave an element 'empty' in place of 3
```

Applying `map()` or any kind of `filter()` on the arrays, applies that function to all of the elements in that array. In mappingarray.html file I have included an example for applying `map` on an array. In very similar way it could also be extended to `filter` function.

## Destructuring Arrays

```javascript
const student = ["Rishik Mani", "Male", "Tall"];
let [personName, gender, height] = student;
```

This way it destructures an array until the array runs out of elements or the square brackets run out of elements.

## Spreading arrays

```javascript
const cities = ["Delhi", "Mumbai", "Kolkata", "Lucknow", "Gorakhpur"];
const citiesCopy = cities;
citiesCopy.push("Noida");

// this would also print Noida, as when we assign an array it does not create a copy, rather refers to the memory location
console.log(cities);

//to copy the elements of an array, use ...
const citiesShallowCopy = [...cities, "Noida"];
```

It is in the similar way, new objects could be copied into another object.

## Making objects using constructor

```javascript
class Student {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}

const student = new Student{'Rishik', 'Male'};

// modifying object using dot notation
student.name = 'Rishik Mani';

// modifying object using square bracket notation
student['name'] = 'Rishik Mani';
```

## Functions

### Using rest parameters

If the number of arguments being passed to the funtion is not known, one can use a special parameter called as _rest parameter_. The syntax uses the same 3-dot operator.

```javascript
function sortList(orderBy, ...items) {...}
sortList('alphabetical', 'arg1', 'arg2', 'arg3');
```

This creates an array named _list_ inside the function.

### Using the arguments object

Another way to access any number of arguments passed to a function is to use the arguments object.

```javascript
function sortList() {
  for (let i = 0; i < arguments.length; i++) {
    console.log("The argument is ", arguments[i]);
  }
}
```

The arguments object resembles an array but is not an array. It only has access to array's _length_ property.

### Using a callback function

When a function is passed an argument to a function, the function being passed as an argument is called the callback function while the function to which argument is being passed is called as the outer function.

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

### Setting default parameters

```javascript
function (firstName='Rishik', lastName='Mani') {
  ...
}
```

The interesting thing about functions in Javascript is that it does not matter where the function has been defined, atleast when you are in the same block (needs a bit correction here). Once the compiler sees call to a function, which has already not been defined, the compiler finds it and brings it to the top. This is called as hoisting.

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

### Simplifying arrow functions

If the arrow function contains eihter of a single parameter or just a single return statement, it could further be simplified. The `square` arrow function that we already defined, could further be simplified.

```javascript
const square = (number) => number ** 2;
```

_In the above snippet, one could remove the parentheses around the parameter, remove the curly brances and drop the keyword return. Althoug, the Javascript prettifier is not letting me drop the parentheses around the parameter_.

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
console.log(`Student's first name is ${_student.firstName}`);
```

One could also write the method using the method notation, `fullName(firstName, lastName)`.

### Understanding Context and this

```javascript
const myCar = {
  speed: 0,
};

const myTruck = {
  speed: 0,
};

function drive(speedLimit) {
  this.speed = speedLimit;
}
```

The point of not having a function as method for similar type of objects is to remove redundancy. Both the car and truck objects have same method of speeding. Rather than having them as two methods in both the objects, one can just write only one function. The problem with `drive` is now, to which object the `this` points to. This could be solved in two ways:

1. Passing an object to the function
2. Setting the context of the function

#### Passing an object to the function

```javascript
function drive(vehicle, speedLimit) {
  vehicle.speed = speedLimit;
}
drive(myCar, 50);
```

#### Setting the context of the function

##### Using call()

```javascript
drive.call(myCar, 60);
```

`call()` expects the first argument as the object followed by any additional number of arguments.

##### Using apply()

The apply() method works the same as call() but takes an array as its second parameter, which will be passed to the function that apply() is applied to.

##### Using bind()

```javascript
const driveMyCarOnTheFreeway = drive.bind(myCar, 80);
driveMyCarOnTheFreeway();
```

Rather than return the result of calling the function, bind() returns a new function. This new function could be assigned to a new variable.

### Passing a function from one object to another

```javascript
const myCar = {
  speed: 0,
  operate(speedLimit, callback) {
    callback(speedLimit);
    console.log("Inside operate!");
  },
};

function drive(speed) {
  this.speed = speed;
  console.log("Inside drive!");
}

myCar.operate(80, drive);
```

Although, this seems fine, but take a closer look at the `this` inside `drive` function. The `this` keyword would not identify with the `myCar` object, but rather the `window` object. To overcome this, one can simply bind the callback function that is passed to the `operate()` method to the `this` context of the object.

```javascript
const myCar = {
  speed: 0,
  operate(speedLimit, callback) {
    boundCallback = callback.bind(this);
    boundCallback(speedLimit);
    console.log("Inside operate!");
  },
};

function drive(speed) {
  this.speed = speed;
  console.log("Inside drive!");
}

myCar.operate(80, drive);
```

### Passing a function to a child to update parent

For this I created the webpage `updateparentfromchild.html`.
