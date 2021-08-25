# JAVASCRIPT OBJECT ORIENTED PROGRAMMING COURSE
**Given by:** Juan David Castro [Platzi](https://platzi.com/p/juandc/)

## Content
- [Object Oriented Programming OOP](#object-oriented-programming-oop)
- [OOP in JavaScript](#oop-in-javascript)
    - [Objects](#objects)
    - [Literal Objects and Prototypes](#literal-objects-and-prototypes)
    - [Classes](#classes)
- [Abstraction and Encapsulation](#abstraction-and-encapsulation)
    - [Abstraction](#abstraction)
    - [Encapsulation](#encapsulation)
    - [Modules ECMAScript 6](#modules-ecmascript-6)
- [Inheritance and Polymorphism](#inheritance-and-polymorphism)
    - [Inheritance](#inheritance)
    - [Polymorphism](#polymorphism)


## Object Oriented Programming OOP
There are different ways to programming, this are called "Paradigms", the most common are:Podemos agrupar datos que tienen algo en común, o que pueden ser agrupados.
- *Structured*
- *Object Oriented*
- *Functional*

There are not one paradigm better than other, all of then have different applications.

**Advantages of OOP:**
- *Data encapsulation:* we can group data that have something in common.
- *Code reusing:* we can reuse repetitive code by encapsulating methods and attributes in an object.

<div align="right">
  <small><a href="#content">🡡 return</a></small>
</div>

## OOP in JavaScript
### Objects
An **object** in JavaScript is an instance from the prototype Object.

```JS
function Student(){
    this.name = 'Daniel';
    this.age = 20;
    this.points = 1500;
}
```
**In JavaScript everything is a Object.**

### Literal Objects and Prototypes

```JS
// LITERAL OBJECTS
const daniel = {
    // Attributes
    name: "Daniel",
    age: 20,
    // Methods
    approvedCourses: [
        "Curso POO JavaScript",
        "Curso Definitivo JavaScript"
    ],
    approveCourse (newCourse) {
        this.approvedCourses.push(newCourse);
    },
};

// PROTOTYPES
function StudentPrototype(name, age, approvedCourses) {
    // Prototype Attributes
    this.name = name;
    this.age = age;
    this.approvedCourses = approvedCourses;
    // Prototype Method [1] 
    /* this.approveCourse = function (newCourse) {
        this.approvedCourses = newCourse;
    }
    */
}

// Same prototype method as [1]
StudentPrototype.prototype.approveCourse = function (newCourse) {
    this.approvedCourses = newCourse;
}

// Prototype Instance
const Michael = new StudentPrototype(
    "Michael",
    21,
    [
        "Curso Introducción a los Videojuegos",
        "Creación de Personajes"
    ]
)
```

The method `Object.create()` creates a new Object using an existent Object as the prototype of the new Object created.

## Classes

```JS
// CLASSES
class StudentClass {
    constructor({
        name, 
        age, 
        approvedCourses = [],
        email = "",
    }) {
        this.name = name;
        this.age = age;
        this.approvedCourses = approvedCourses;
        this.email = email;
    }

    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }
}

// Instance
const Sarah = new StudentClass({
    name: "Sarah",
    age: 18,
    approvedCourses: [
        "Curso Introducción a Python",
        "Creación de creación de CRUD Python"
    ]
});
```

## Abstraction and Encapsulation 
### Abstraction
- Way of hiding the implementation details and showing only the functionality to the users, ignores the irrelevant details and shows only the required one.
- Reduce the duplication of code
### Encapsulation
- Process of binding the data with the functions acting on that data. It allows us to control the data and validate it.
- Denied the modification of the methods and attributes

### Modules ECMAScript 6
The module's use depends on two declarations **Export** adn **Import**.
Modules can be used to hide certain information that we do not want to be public and just run the necessary.

To modulate is enough to declare a file `.js` to be running by the V8 Engine, but is highly recommend to use the extension `.mjs` to know what is a module and what not.

We only need to declare in the file HTML if we want to use the module there:

```html
<script type="module" src="module.mjs"></script>
```



**¿How to export?**

Put in front of the element that you want to export the word **Export**.
You also can export at the end of the file using:

```JS
export { class1, function2, object3 };
```

**¿How to import?**

Put the complete statement **Import** in the at the top of the scripts that we want to use.

```JS
import { class1 } from './root'
```


## Inheritance and Polymorphism
### Inheritance
- The JavaScript inheritance is a mechanism that allows us to create new classes on the basis of already existing classes. It provides flexibility to the child class to reuse the methods and variables of a parent class.

- The JavaScript **extends** keyword is used to create a child class on the basis of a parent class. It facilitates child class to acquire all the properties and behavior of its parent class.

### Polymorphism
- The polymorphism is a core concept of an object-oriented paradigm that provides a way to perform a single action in different forms. It provides an ability to call the same method on different JavaScript objects. As JavaScript is not a type-safe language, we can pass any type of data members with the methods.

<div align="right">
  <small><a href="#content">🡡 return</a></small>
</div>