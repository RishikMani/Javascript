# Javascript

This project is a very first attempt to get my hands dirty with Javascript. The project would start from very basic Javascript and would hopefully extend by including a couple of frameworks, i.e. Vue.Js. For learning purpose, the whole project would be divided into many different folders covering small concepts.

A lot of very basic stuff is not included as it is almost similar in many other programming languages. I have tried to include concepts which might not be entirely different from similar concepts in other programming languages, but might have a different look and feel attached to them.

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
