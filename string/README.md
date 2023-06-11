## Using a template literal string

The template string is another name for placeholders.

```javascript
let age = 23;
let name = "Rishik Mani";

// this way is now old school
console.log(name + " is " + age + " years of age.");

// one can rather use placeholders to substitute the values
let description = `${name} is ${age} years of age.`;

console.log(description);
```

Remeber that to replace the placeholder with the value of the variable it should be placed within backticks such that it could be executed at run time preceded by a dolar sign, `${}`.

## Working with string functions

There are some interesting functions one can have a look at, but mostly they are abundantly clear by their names.

### 1. charAt(int)

```javascript
const NAME = "Rishik Mani";
console.log(NAME.charAt(5)); // outputs 'k'
```

### 2. concat(str)

```javascript
const FIRST_NAME = "Rishik";
const LAST_NAME = "Mani";
const FULL_NAME = FIRST_NAME.concat(" ", LAST_NAME); // outputs 'Rishik Mani'
```
