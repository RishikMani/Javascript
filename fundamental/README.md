As in every language there are many basic things about Javascript as well.

## Comments

There are different ways comments can be added in Javascript files.

```javascript
// this is a single line comment.

/* this is a multi-line comment,
split over many lines.*/
```

## Variables

There are mutliple ways of declaring variable, namely `var`, `let` and `const`. _Although, `var` could be used to declare a new variable, new age Javascript developers prefer `let` over `var`._ The convention for choosing the name of a variable follows `camelCasing`.

Variables can also be declared using `const`. A `const` variable can only be assigned a value once compared to variable declared using `var` or `let`. Assigning a new value to a `const` variable will throw an exception. Conventionally, a `const` variable name follows `UPPER_SNAKE_CASE`.

```javascript
var variableOne = 25;
let variableTwo = 30;
const CONST_VARIABLE = "CONSTANT";
CONST_VARIABLE = 25; // this will raise a TypeError exception
```

_Javascript is a loosely typed language and the type of data that a variable holds need not be told (similar to Python). Javascript is also a dynamically stored language which implies that the type of data stored in a variable can be changed._

```javascript
variableOne = "This variable now holds a string.";
```

To check what type of value is stored in a variable, the `typeof` operator can be used.

## Data types
Javascript has the following data types:
1. object: A javascript object is a collection of different key-value pairs.
```javascript
const CAR = {type:"Fiat", model:"500", color:"white"};
```

2. undefined
3. boolean
4. number
5. bigint(n)
6. string
7. symbol

If a variable is declared but no value is assigned to it, the variable by default contains value `undefined`.
