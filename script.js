// Person class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
    }
}

// Employee class inheriting from Person
class Employee extends Person {
    constructor(name, age, jobTitle) {
        super(name, age); // Call parent constructor
        this.jobTitle = jobTitle;
    }

    jobGreet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
    }
}

// Example usage:
// const person = new Person("Alice", 25);
// person.greet();

// const employee = new Employee("Bob", 30, "Manager");
// employee.greet();      // Inherited method from Person
// employee.jobGreet();   // Employee-specific method