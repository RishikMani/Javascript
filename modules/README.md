## Modules

Modules are enabled by two keywords: `import` and `export`.

### Exporting a module

```javascript
// store this content in a separate js file
export const BASE_URL = "https://example.com";
```

As this would be a static file, it is not at all advisable to store sensitive information in such files. Modules can be created in one of the two ways: named export and default exports.

#### 1. Named exports

The above example is a named export. Just add the keyword `export` in front of a variable, constant, function or a class.

```javascript
export function getStudentDetails(studentId) {}
```

Rather than putting `export` keyword in front of all such modules, it is a better practice to place an export at the end of the file and declare all such modules.

```javascript
export { BASE_URL, getStudentDetails };
```

#### 2. Default exports

```javascript
export default function getStudentDetails(studentId) {}
```

To create a default export, just add `default` in named export. A file can have maximum one default export but can have many named export.

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

If an export file has large number of exports, this may have an impact on the performance. Through dynamic loading of module, we can ensure that module gets imported when and only it would be needed. This indeed creates a promise and once the promise gets fulfilled, the execution goes ahead.

```javascript
// module.js
const myButton = document.getElementById("myButton");
myButton.addEventListener("click", () =>
  import("example.js").then((MyModule) => alert(`${MyModule.BASE_URL}`))
);
```

### Importing modules into HTML

In [this](./modulesInHTML.html) example, one can see how a module can be imported in an HTML file. Add a script tag and provide the path of the Javascript file where the module resides and just add a property `type="module"` in the script tag.
