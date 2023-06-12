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

### 3. indexOf(char)

Returns the first index of the occurence of the given character.

```javascript
const NAME = "Rishik Mani";
console.log(NAME.indexOf("i")); // outputs 1
```

### 4. split(char)

Splits the given string on the input character. The output of splitting a string is an array.

```javascript
const NAME = "Rishik Mani";
console.log(NAME.split(" ")); // outputs [Rishik, Mani]
```

If no character is provided for the split, the output is the array of the string which is being split. In the above example, the output would be `[Rishik Mani]`.

### 5. substring(int, int)

It just returns the substring starting at the first input argument till the last charatcer before the second argument. The second argument is exclusive.

```javascript
const NAME = "Rishik Mani";
console.log(NAME.substring(3, 7)); // outputs 'hik'
```

However if the first index is larger than the second index, the function reverses them. `NAME.substring(10. 5)` would print `k Man` which is equal to `NAME.substring(5, 10)`.
