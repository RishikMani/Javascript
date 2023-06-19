## Understanding Context and this

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

The point of not having a function as method for similar type of objects is to remove redundancy. Both the car and truck objects have same method of speeding. Rather than having them as two methods in each object, one can just write only one function.

The problem with `drive` is now, to which object the `this` points to. This could be solved in two ways:

1. Passing an object to the function
2. Setting the context of the function

### 1. Passing an object to the function

```javascript
function drive(vehicle, speedLimit) {
  vehicle.speed = speedLimit;
}
drive(myCar, 50);
```

### 2. Setting the context of the function

##### a. Using call

```javascript
drive.call(myCar, 60);
```

`call` expects the first argument as the object followed by any additional number of arguments.

##### b. Using apply

The `apply` method works the same as `call` but takes an array as its second parameter, which will be passed to the function that `apply` is applied to.

##### c. Using bind()

```javascript
const driveMyCarOnTheFreeway = drive.bind(myCar, 80);
driveMyCarOnTheFreeway();
```

Rather than return the result of calling the function, `bind` returns a new function. This new function could be assigned to a new variable.
