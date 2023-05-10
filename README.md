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
