## Loop

The looping in Javascript gets a little interesting as we have some unique ways of looping over the values. There are some new loops in addition to the traditional loops.

### 1. for ... in

The [file](./forin.html) contains a demonstration on how to use `for ... in` to loop over the different properties of an object.

### 2. for ... of

It is very similar to `for ... in` loop.

```javascript
const NUMBERS = {1, 2, 3, 4};
for (let number of NUMBERS) {
    console.log(number);
}
```

The remarking difference between `for ... in` and `for ... of` is that, `for ... in` iterates over all enumerable property keys of an object, while `for ... of` iterates over the values of an iterable object, e.g. strings, arrays.

The other known loops in javascript are `for`, `while` and `do...while`.
