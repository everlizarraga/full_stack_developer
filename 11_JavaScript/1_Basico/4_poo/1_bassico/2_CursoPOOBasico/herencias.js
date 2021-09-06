class Comment {
    constructor({
        content,
        studentName,
        studentRole = "estudiantes",
    }) {
        this.content = content;
        this.studentName = studentName;
        this.strudentRole = studentRole;
        this.likes = 0;
    }

    publicar() {
        console.group("Comentario: ");
        console.log(this.studentName + "(" + this.strudentRole + ")");
        console.log(this.likes + " likes");
        console.log(this.content);
        console.groupEnd();
    }
}



class Course5 {
    constructor({
        name,
        classes = [],
        isFree = false,
        lang = "spanish",
    }) {
        this._name = name;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
    }

    get name() {
        return this._name;
    }

    set name(nuevoNombrecito) {
        if(nuevoNombrecito === "Curso Malito") {
            console.error("NOP --- nombre no aceptado");
        } else {
            this._name = nuevoNombrecito;
        }
    }
}

const cursoProgBasica = new Course5({
    name: "Curso Gratis de Programación Básica",
    isFree: true,
});

const cursoDefinitivoHTML = new Course5({
    name: "Curso Definitivo de HTML y CSS",
});

const cursoPracticoHTML = new Course5({
    name: "Curso Práctiico de HTML y CSS",
    lang: "english",
});


// ////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////

class Student5 {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }

    publicarComentario(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
        });
        comment.publicar();
    }

    static printxd(algo) {
        console.log(`Impresion sin Instanciar: ${algo} >> ${this.learningPaths}`);
    }
}

// ////////////////////////////////////////////////////////

class FreeStudent5 extends Student5{
    constructor(props) {
        super(props);
    }
    
    approveCourse(newCourse) {
        if(newCourse.isFree) {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn("Lo sentimos, " + this.name + "Solo puedes tomar cursos abiertos");
        }
    }
}

class BasicStudent5 extends Student5 {
    constructor(props) {
        super(props);
    }
    
    approveCourse(newCourse) {
        if(newCourse.lang !== "english") {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn("Lo sentimos, " + this.name + "No puedes tomar cursos en inglés");
        }
    }
}

class ExpertStudent5 extends Student5 {
    constructor(props) {
        super(props);
    }
    
    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }
}

class TeacherStudent5 extends Student5 {
    constructor(props) {
        super(props);
        if(props.esPro == undefined) {
            this.esPro = false;
        } else {
            this.esPro = props.esPro;
        }
    }
    
    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }

    publicarComentario(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole: "profesor",
        });
        comment.publicar();
    }
}

// ////////////////////////////////////////////////////////

const juan5 = new FreeStudent5({
    name: "Juan5DC",
    username: "juan5dc",
    email: "juanito@platzi.com",
    twitter: "tfjuandc.twitter",
    learningPaths: [
        "escuelaWeb",
        "escueaVgs",
    ],
});

const miguelito5 = new BasicStudent5({
    name: "Miguelito5 XD",
    username: "miguelito5_z",
    email: "miguelon5@platzi.com",
    twitter: "tmiguel5.twitter",
    learningPaths: [
        "escuelaWeb",
        "escueaData",
    ],
});

const freddy5 = new TeacherStudent5({
    name: "Freddy Vega",
    username: "freddier",
    email: "freedy@platzi.com",
    twitter: "freddy.twitter",
    instagram: "freedier.instagram",
});


const ever5 = new TeacherStudent5({
    name: "Ever Lizarraga",
    username: "Rolank25",
    email: "ever@platzi.com",
    twitter: "ever.twitter",
    esPro: true,
    instagram: "ever.instagram",
});

// ///////////////////////////////////////////////
// ///////////////////////////////////////////////
// ///////////////////////////////////////////////

const juan1 = {
    name: "JuanDC",
    username: "juandc",
    points: 100,
    socialMedia: {
        tewitter: "fjuandc",
        instagram: "fjuandc",
        facebook: undefined,
    },
    approvedCourses: [
        "Curso Definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS",
    ],
    learningPaths: [
        {
            name: "Escuela de Desarrollo Web",
            courses: [
                "Curso Definitivo de HTML y CSS",
                "Curso Práctico de HTML y CSS",
                "Curso de Rresponsive Design",
            ]
        },
        {
            name: "Escuela de Videojuegos",
            courses: [
                "Curso Introducción a la Producción de Vgs",
                "Curso de Unreal Engine",
                "Curso de Unity 3D",
            ]
        },
    ]
}