## Classes

### Encapsulation

Each object in a program has a set of private data which can only be accessed through that object. e.g. you have a phone which has a property called as battery. You can call `Phone.batteryLevel` and get the battery level (in %), but you cannot simply assign a value to this property to instantly chrage the phone, i.e. `Phone.batteryLevel = 100`. Rather to set this property, one has to = plug in the charger, which then initiates a function which increases the `batteryLevel`.

### Abstraction

So charging the phone became simple by just plugging the cable in and connecting it to a power source. What happens thereafter, the user need not worry about that, it would be taken care of. Hiding this complexity as to how a phone charges once connected to a power source is called as abstraction.

### Inheritance

An object could inherit multiple properties from other objects. e.g. animals could broadly be defined as animals who have 2 eyes, living organisms, who eat and sleep. Although, the instances could be vastly different from each other. e.g. both dog and sharks are animals, but dogs can bark and sharks can swim. So both the objects can access the parent class `Animal`, yet also have different unique properties.

### Polymorphism

Differnt objects might have the same function but how that function is implemented might defer hugely. e.g. an `Animal` object could have a `move` function, but a bird flies, dog runs and a fish swims. So although all the animal classes have a move method, but how they move is completely independent of each other nd unique.

```javascript
class MyClass {
  constructor(...args) {
    super(...args);
  }
} // how a class is defined

const myClassObject = new MyClass(); // create an instance of the class
```

As many other programming languages supporting OOP concepts, creating an instance of the class first calls the constructor of the class.

**NOTE: An important difference between a class and function is that the classes are not hoisted. So if you try to use a class before it has been declared it will throw an error.**

### Derived classes

```javascript
class Dog extends Animal {}
```

The `extends` keyword ensures that the class `Dog` inherits from class `Animal`.

### Constructors

```javascript
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const myStudent = new Student("Rishik", "Mani");
```

The constructor in the derived class should have a call to `super` before any other statements, passing to it the values with which you want to initialize the properties of the parent.

```javascript
class Dog extends Animal {
  constructor(eyes, weight, sound) {
    super(eyes, weight);
    this.sound = sound;
  }
}
```

_On looking at a class, it very closely resembles an object itself. Although, an object is created from a class. Some other significant differences between a class and an object is that a class contains contructor and the methods are not separated using a comma._

```javascript
class Animals {
  constructor(size, type) {} // constructor and move are not separated by ','
  move() {}
}
```

### Overriding methods in a derived class

```javascript
class Numbers {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }
  sum() {
    console.log(this.num1 + this.num2);
  }
}

class Derived extends Numbers {
  // class properties do not need var, let or const keyword
  publicField = 0;
  constructor(num1, num2, num3) {
    super(num1, num2);
    this.num3 = num3;
  }
  sum() {
    console.log("This sum would not be equal to the parent class!");
    console.log(this.num1 + this.num2 + this.num3);
  }
}
```

Declaring a property (field) inside a class is very similar to an object, but it does not use `var`, `let` or `const` keywords. In Javascript it is a good practice to define all the class properties before the constructor. This ensures that when a class is istantiated, the members (methods or fields) are also accessible in the constructor.

### Private members

```javascript
class Numbers {
  #randomNumber;
  constructor(number) {
    this.#randomNumber = number;
  }
}

let numbers = new Numbers(15);
numbers.#randomNumber === 20; // ideally this should break
```

I still do not understand what and why it is happening, but running this on the console in Brave browser did not throw any error. On [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields), they say that `Code run in the Chrome console can access private properties outside the class. This is a DevTools-only relaxation of the JavaScript syntax restriction.`

- [ ] Test the above once with Mozilla Firefox
