# Javascript

This project is a very first attempt to get my hands dirty with Javascript. The project would start from very basic Javascript and would hopefully extend by including a couple of frameworks, i.e. Vue.Js. For learning purpose, the whole project would be divided into many different folders covering small concepts.

A lot of very basic stuff is not included as it is almost similar in many other programming languages. I have tried to include concepts which might not be entirely different from similar concepts in other programming languages, but might have a different look and feel attached to them.

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
