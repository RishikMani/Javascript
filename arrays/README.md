## Arrays

Arrays in Javascript are phenomenal. An array can consist of any data types. Moreover, an array can have an array as its element as well. This reminds me of the beautiful world of Python and NumPy. _If an array is defined by using `const`, the array is immutable but the elements of array are mutable._

```javascript
const arr = [1, 2, 3];
arr = [2, 3, 4]; // this would fail, as array is immutable
arr[1] = "red"; // this would not break as the elements of the array are mutable
```

But adding an element to an array in Javascript is really bad. Why? Why anyone would have thought this way?

```javascript
const arr = [1, 2, 3];

// this adds an element 11 at index 10, but the values from index 3 to 9 would be undefined
const arr[10] = 11;

console.log(arr[7]); // this outputs 'undefined'
console.log(arr.length); // this putputs '11'
```

The array `arr` now has a lot of undefined elements within and is called as a sparse array. To delete an element from an array is also awfully bad. One can assign a new value to the array's length property. If the element to be deleted is somewhere within the array, one could also use `delete` but this would just replace that element with `empty`.

```javascript
const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.length); // outputs 6
arr.length = 5; // this would resize the array and the element '6' would be removed
delete arr[2]; // this would leave an element 'empty' at index in place of 3
```

One could also apply same function on all the elements of an array. Using `map`, a function could be applied to all the elements of an array. The [example](./mappingArray.html) shows how an element inside an array can be converted to a list element. Similar to the map function, one can also apply a `filter` on each element of the array.

```javascript
const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult); // result contains [32,33,40]

function checkAdult(age) {
  return age >= 18;
}
```

## Destructuring Arrays

```javascript
const student = ["Rishik Mani", "Male", "Tall"];
let [personName, gender, height] = student;
```

This way it destructures an array until the array runs out of elements or the square brackets run out of elements. The variables can then easily be accessed like usual.

## Spreading arrays

Arrays are immutable and that poses an interesting problem as to how to add an element to an array.

```javascript
const cities = ["Delhi", "Mumbai", "Kolkata", "Lucknow", "Gorakhpur"];
const citiesCopy = cities;
citiesCopy.push("Noida");
console.log(cities);
```

In the above example, when `citiesCopy` is created, it holds reference to the original array rather than the values. So once I do `push()`, it pushes the element to the original array. It is like two variables having the same values.

But in the following way, first a copy of the array gets created and then the element is added to this copy rather than the original array.

```javascript
const citiesShallowCopy = [...cities, "Noida"];
```

The `...` operator is the spread opertaor which just copies all the content of the array `cities` and then `Noida` is appended to the last of the array `citiesShallowCopy`. In the similar way, an existing object could be copied into another object.
