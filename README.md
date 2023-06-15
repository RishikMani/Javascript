# Javascript

This project is a very first attempt to get my hands dirty with Javascript. The project would start from very basic Javascript and would hopefully extend by including a couple of frameworks, i.e. Vue.Js. For learning purpose, the whole project would be divided into many different folders covering small concepts.

A lot of very basic stuff is not included as it is almost similar in many other programming languages. I have tried to include concepts which might not be entirely different from similar concepts in other programming languages, but might have a different look and feel attached to them.

## Functions

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

### Chaining functions

As in many other programming languages, one can chain multiple functions to be executed sequentially.

```python
name = 'rishik mani     '
print(name.upper().strip())
```

This way the name first gets converted to uppercase and then the extra white spaces at the end of string are removed. In Javascript, the same happens and the previous function in the sequential call returns a `this` from a method.

```javascript
const human = {
  activity: undefined,
  eat() {
    this.activity = "eating";
    return this;
  },
  sleep() {
    this.activity = "sleeping";
    return this;
  },
  thinking() {
    this.activity = "thinking";
    return this;
  },
};
```

To make the human think, eat and sleep, one could do

```javascript
let result = human.thinking();
let result2 = human.eating(result);
let result3 = human.sleeping(result2);
```

This all could just be written concisely in a single statement as

```javascript
result = human.thinking().eating().sleeping();
```

## Classes

### Encapsulation

Each object in a program has a set of private data which can only be accessed through that object. e.g. you have a phone which has a property called as battery. You cannot directly access the property and say `Phone.batteryLavel = 100`, but rather one has to plug in the charger which then initiates the functionality to start charging the phone, `Phone.charge()`.

### Abstraction

It simply means hiding the complexities from the user and providing the user a very simple way to interact and get the desired output. e.g. in any machine learning algorith where you need to identify a dog in the image, one just uploads the image and the algorithm takes care of marking the object. You do not neccessarily need to have knowledge about how that algorithm detects a dog.

### Inheritance

An object could inherit multiple properties from other objects. e.g. animals could broadly be defined as animals who have 2 eyes, living organisms, who eat and sleep. Although, the instances could be vastly different from each other. e.g. both dog and sharks are animals, but dogs can bark and sharks can swim. So both the objects can access the parent class `Animal`, yet also have different unique properties.

### Polymorphism

Differnt objects might have the same function but how that function is implemented might defer hugely. e.g. an `Animal` object could have a `move()` function, but a bird flies, dog runs and a fish swims.

```javascript
class MyClass {}
```

An important difference between a class and function is that the classes are not hoisted. So if you try to use a class before it has been declared it will throw an error.

```javascript
const myObject = new MyClass(); // creating a class using class expression
```

On calling `new` on any class it invokes the constructor of the class. Unless you have a custom constructor written, a default constructor always gets called. `constructor(){}`.

### Derived classes

```javascript
class Dog extends Animal {}
```

If the derived class has no constructor but used the `new` keyword, it invokes the parent class contructor.

```javascript
constructor(...args){
  super(...args);
}
```

### Constructors

```javascript
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const myStudent = new Student("Rishik", "Mani");
```

The constructor in the derived class should have a call to `super()` before any other statements, passing to it the values with which you want to initialize the properties of the parent.

```javascript
class Dog extends Animal {
  constructor(eyes, weight, sound) {
    super(eyes, weight);
    this.sound = sound;
  }
}
```

### Properties and methods

On looking at the class it very closely looks like an object itself. Although, an object is created from a class. Some other significant differences between class and object is that a class contains contructor and the methods are not separated using a comma.

```javascript
class Animals {
  constructor(size, type) {}
  move() {}
}
```

### Overriding methods in a derived class

```javascript
class Numbers {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }
  sum() {
    console.log(this.num1 + this.num2);
  }
}

class Derived extends Numbers {
  publicField = 0; // this is how a property is defined in a class, it does not need let or var or const keyword
  constructor(num1, num2, num3) {
    super(num1, num2);
    this.num3 = num3;
  }
  sum() {
    console.log("This sum would not be equal to the parent class!");
    console.log(this.num1 + this.num2 + this.num3);
  }
}
```

Declaring a property (field) inside a class is very similar to an object, but it does not use `var`, `let` or `const` keywords. In Javascript it is a good practice to define all the class properties before the constructor. This ensures that when a class is istantiated, the members (methods or fields) are also accessible in the constructor.

### Private members

```javascript
class Numbers {
  #randomNumber;
  constructor() {}
  sum() {
    this.#randomNumber = 5;
  }
}
```

### Static members

```javascript
class Number {
  static number = 5;
}
let numInstance = new Number();
```

The above static property can only be accessed using the class itself, `Number.number`. If one tries to access this static property using an instance of the class `numInstance.number`, it will throw an error.

**Note: I was expecting that the private property is also inaccessible from the instance of the class, but that is not the case. Verify it when revising this content.**

## Events

If one has to add event attribute to a lot of HTML elements, it would at some time become very difficult to manage the code. It also violates the separation of concerns rule, that says that HTML and Javascript should be kept separate.

```html
<button onclick="alert('You clicked this button')">Click</button>
```

This way of declaring attributes should always be avoided.For this purpose, one can use listening with event handler properties.

```javascript
const button = document.getElementById("button");

function displayAlertWindow() {
  alert("Using event handler property!");
}

button.onclick = displayAlertWindow;
```

The biggest problem with event handler properties is that it’s impossible to use them to set more than one event of a certain type to an element. Another downside is that each event handler property can be used for only one type of event, and there aren’t built­in event handler attributes for every possible event that can happen.

### Using addEventListener()

it takes two parameters: the event to listen for and a callback function that should run when the event happens on the object.

```javascript
EventTarget.addEventListener("event", callback, options);
```

The first parameter is the name of the event to listen for. The name does not include the `on` prefix. (Add a MDN link later to possible events). The second parameter is a callback function. This usually is an anonymous function or a function defined outside of the `addEventListener` function call. Remeber not to put `()` on the callback function. The third parameter is the optional `option` object. It can contain any of the following properties:
a. `capture`: usually set to false.
b. `once`: it removes the event listener from the element once it has been invoked. It is set to `false` by default.
c. `passive`: it calls the `preventDefault()` method. This is set to `false` by default.. By setting it to `true` the performance of the user interface could be improved.
d. `signal`:I
t takes an `AbortSignal` as its value.This signal consists of call to `abort()` which then removes the event listener from the element.

`addEventListener` is better as compared to the other two methods as one can add more than one event listeners on the same element.

```javascript
onClick(e){} // The e is called an event object
```

### Listening on multiple targets

In the eventbubbling.html, there is a div element that contains two buttons, but surprisingly none of the buttons have any event listener. An example could be, there is a form with a button in it, but clicking the button is more interesting for the form rather than the button. As this button is nested within a form this event afer happening at the button would be bubbled up to the element that contains the button. In our case that containing element would be the div. This whole thing is called as event bubbling.

### Dispatching events programatically

The events we talk about are usually result of an external input, e.g. user click, mouse movement by the user, etc. These events come outside of the browser. Though sometimes events could also be fired within a browser, e.g. when a page loads bring the focus to a specific input field. This I have explained in the example dispatchEvent.html. It needs to be ensured that once the event is added to the element, the `dispatch` call needs to be made.

### Removing event listeners

```javascript
const handleClick = function (e) {
  console.log("click handled");
};
// we first add an event to an existing element and then only could remove event listener
myButton.addEventListener("click", handleClick);
myButton.removeEventListener("click", handleClick);
```

### Preventing default actions

This topic needs to a bit of more study as I saw it a lot many times. I guess, it also helps page to maintain its scroll position when the back button is clicked on the browser.

```javascript
e.preventDefault();
```

### Calling you back

```javascript
loginBtn.addEventListener("click", doSomething());
function doSomething() {}
```

In the above example `doSomething` is a callback function that is passed to another function and will be called at a later point of time. It will be called when the event listener detects an event.

**Need to do a lot more reading on promises. The topic seems kind of crazy maze.**

## Modules

Modules are enabled by two keywords: `import` and `export`.

### Exporting a module

```javascript
// store this content in a separate js file
export const BASE_URL = "https://example.com";
```

As this would be a static file, it is not at all advisable to store sensitive information in such files. Modules can be created in one of the two ways: named export and default exports.

#### Named exports

The above example is a named export. Just add the keyword `export` in front of a varible, constant, function or a class.

```javascript
export function getStudentDetails(studentId) {}
```

Rather than putting `export` keyword in front of all such modules, it is a better practice to place an export at the end of the file and declare all such modules.

```javascript
export { BASE_URL, getStudentDetails };
```

#### Default exports

```javascript
export default function getStudentDetails(studentId) {} // just added default in named export
```

A file can have maximum one default export but can have many named export.

```javascript
export const BASE_URL = "https://example.com";
export default function getStudentDetails(studentId) {}
```

Once an export module is created it can be easily imported into other files by using the `import` statement. Remember, the `import` statement usually is the first statement in any file. Most important thing to remember is that imported modules are **read only**.

```javascript
import { BASE_URL } from "example.js"; // path to the file is relative
```

If one needs to import a `default` export, then no curly braces are needed.

```javascript
import getStudentDetails from "example.js";
```

### Renaming exports and imports

```javascript
export { BASE_URL as URL };
import { BASE_URL as URL } from "example.js";
```

### Importing a module object

If there are a lot of exports in any given file, it makes sense to import all of them rather than cherry pick them.

```javascript
import * as myModules from "example.js"; // now we can access them as myModules.BASE_URL
```

### Loading dynamic modules

If an export file has large number of exports, this may have an impact on the perfromance. Through dynamic loading of module, we can ensure that module gets imported when and only it would be needed. This indeed creates a promise and once the promise gets fulfilled, the execution goes ahead.

```javascript
// module.js
const myButton = document.getElementById("myButton");
myButton.addEventListener("click", () =>
  import("example.js").then((MyModule) => alert(`${MyModule.BASE_URL}`))
);
```

### Importing modules into HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Import module in HTML</title>
  </head>
  <body>
    <button id="button">Click to see how modules work in HTML!</button>
    <script src="module.js" type="module"></script>
  </body>
</html>
```

In the above example in the script tag, the path of the module was given as `src` and the type of the file is mentioned to be `module`. This was a javascript module could be imported into an HTML file.

This officially marks part 1 of this Javascript. After this I will move onto other advanced concepts related to Javascripts. But before I moved I have to restructure this huge of `README` file into smaller manageable folders.
