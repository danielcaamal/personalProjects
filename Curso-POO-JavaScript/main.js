class Comment {
    constructor({
        content,
        studentName,
        studentRole = "student",
    }) {
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0;
    }

    publish() {
        console.log(this.studentName) + " ("+ this.studentRole+")";
        console.log(this.likes + " Likes");
        console.log(this.content);
    }
}

function videoPlay(id){
    const URL = "https://aquivaelurl/" + id;
    console.log("Se está reproduciendo desde: " + URL);
}

function videoStop(id){
    const URL = "https://aquivaelurl/" + id;
    console.log("Pausado desde: " + URL);
}

class Classes {
    constructor({
        name, 
        videoID
    }) {
        this.name = name;
        this.videoID = videoID;
    }

    play() {
        videoPlay(this.videoID);
    }

    stop() {
        videoStop(this.videoID);
    }
}

class Course {
    constructor({
        name,
        classes = [],
        isFree = false,
        lang = "spanish"
    }){
        this._name = name;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
    }
    get name() {
        return this._name; 
    }
    set name(newName) {
        this._name = newName;
    }
}

class LearningPath {
    constructor({
        name,
        courses = [],
    }){
        this._name = name;
        this.courses = courses;
    }
    get name() {
        return this._name; 
    }
    set name(newName) {
        this._name = newName;
    }
}







class Student {
    constructor({
        name,
        email, 
        userName,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourse = [],
        learningPaths = []
    }){
        this._name = name;
        this.email = email;
        this._userName = userName;
        this.socialMedia = {
            twitter,
            instagram,
            facebook
        }
        this._approvedCourse = approvedCourse;
        this.learningPaths = learningPaths;
    }
    get name() {
        return this._name; 
    }
    set name(newName) {
        this._name = newName;
    }

    get userName() {
        return this._userName; 
    }
    set userName(newUserName) {
        this._userName = newUserName;
    }

    get approvedCourses() {
        return this._approvedCourse; 
    }

    publishCommentary (commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
        });
        comment.publish();
    }
}

class FreeStudent extends Student{
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse) {
        if(newCourse.isFree){
            this._approvedCourse.push(newCourse);
        } else {
            console.warn("Lo sentimos, " + this.name + " solo puede tomar cursos abiertos")
        }
    }
}

class BasicStudent extends Student{
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse) {
        if(newCourse.lang !== "english"){
            this._approvedCourse.push(newCourse);
        } else {
            console.warn("Lo sentimos, " + this.name + " no puedes tomar cursos en inglés")
        }
    }
}

class ExpertStudent extends Student{
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse) {
        this._approvedCourse.push(newCourse);
    }
}

class TeacherStudent extends Student{
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse) {
        this._approvedCourse.push(newCourse);
    }

    publishCommentary (commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole: "Professor",
        });
        comment.publish();
    }
}




// Courses
const progBasicCourse = new Course({
    name: "Curso Gratis de Programación Básica",
    classes: [],
    isFree: true
});

const videogameIntroductionCourse = new Course({
    name:  "Curso de Introducción a la Producción de Videojuegos",
    classes: [],
})

const unity3dCourse = new Course({
    name:  "Curso de Unity3D",
    classes: [],
})

const unrealCourse = new Course({
    name:  "Curso de Unreal",
    classes: [],
    lang: "English"
})

const reactPracticeCourse = new Course({
    name:  "Curso Práctico de React",
    classes: [],
})

const reactDefinitiveCourse = new Course({
    name:  "Curso Definitivo de React",
    classes: [],
})

const htmlCssPracticeCourse = new Course({
    name: "Curso Práctico de HTML y CSS",
    classes: [],
})

const htmlCssDefinitiveCourse = new Course({
    name:  "Curso Definitivo de HTML y CSS",
    classes: [],
})


// Learning Paths
const javascriptSchool = new LearningPath({
    name: "Escuela de JavaScript",
    courses: [
    ]
});

const videogamesSchool = new LearningPath({
    name: "Escuela de Videojuegos",
    courses: [
    ]
})

const webSchool = new LearningPath({
    name: "Escuela de Desarrollo Web",
    courses: [
    ]
})

// Students
const daniel = new ExpertStudent({
    name: "daniel",
    userName: "daniel97",
    email: "daniel@email.com",
    points: 5000,
    facebook: "daniel2",
    instagram: "daniel2",
    approvedCourse: [

    ],
    learningPaths: [
    ],
})



