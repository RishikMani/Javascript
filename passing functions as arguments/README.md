## Passing a function from one object to another

```javascript
const myCar = {
  speed: 0,
  operate(speedLimit, callback) {
    callback(speedLimit);
    console.log("Inside operate!");
  },
};

function drive(speed) {
  this.speed = speed;
  console.log("Inside drive!");
}

myCar.operate(80, drive);
```

Although, this seems fine, but take a closer look at the `this` inside `drive` function. How is the drive function going to decide to which object the `this` is referring to? In this case the `this` keyword refers to the `window` (browser window) object. To overcome this, one can simply bind the callback function that is passed to the `operate` method to the `this` context of the object.

```javascript
const myCar = {
  speed: 0,
  operate(speedLimit, callback) {
    boundCallback = callback.bind(this); // bind the drive function to myCar
    boundCallback(speedLimit);
    console.log("Inside operate!");
  },
};

function drive(speed) {
  this.speed = speed;
  console.log("Inside drive!");
}

myCar.operate(80, drive);
```

## Passing a function to a child to update parent

In the [example](./updateparentfromchild.html), when the page first loads we call the method `bookstore.displayBookStore`. This method belogs to the object `bookstore`, which also has the method `removeBook`. So the object `bookstore` has two methods: `displayBookStore`, which displays the books currently in the store, and `removeBook` which removes a book from being displayed once it has been added to the cart.

In the method `displayBookStore` we call the method `shoppingCart.displayCart` which displays the shopping cart. This `displayCart` method is bound to the context of `bookstore`. This way if any activity happens in `shoppingCart`, it could also be cascaded to the `bookstore`. This way a parent can be updated from the child.
