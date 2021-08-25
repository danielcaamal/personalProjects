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
