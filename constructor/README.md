## Making objects using constructor

Constructor is the very first method of a class that gets executed when the class is instantiated. It could be used to initialize certain properties the moment an instance of the class is created.

```javascript
class Student {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}

const student = new Student{'Rishik', 'Male'};

// modifying object using dot notation
student.name = 'Rishik Mani';

// modifying object using square bracket notation
student['name'] = 'Rishik Mani';
```
