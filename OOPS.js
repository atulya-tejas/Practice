//What is OOPs?

// Object-Oriented Programming is a programming approach where software is designed using objects that contain data and functions, making programs modular, reusable, and easy to maintain.

//Class = A class is a blueprint or template used to create objects.

//Object = An object is an instance of a class that represents a real-world entity.

class Student {                             // this is how you create a class
    constructor(name){                      // this is a Constructor function in class .
        this.name = name;    
    }
    introduction (){                        //introduction and study are methods inside a class.
        return `hello, I am ${this.name} `
    }
    study(){
        return`${this.name} is studying`
    }
}

let s1 = new Student("Atulya");   // we created an object.
let s2 = new Student("Yash");

console.log(s1.introduction())    // we are using the objects.
console.log(s2.study())




