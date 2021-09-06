function videoPlay(id) {
    const urlSecreta = "https:://platziultrasecretomasquelanasa.com/" + id;
    console.log("Se está reproduciendo desde la URL " + urlSecreta);
}

function videoStop(id) {
    const urlSecreta = "https:://platziultrasecretomasquelanasa.com/" + id;
    console.log("Pausamos la URL " + urlSecreta);
}

 export class PlatziClass {
    constructor({
        name,
        videoID,
    }){
        this.name = name;
        this.videoID = videoID;
    }

    reproducir() {
        videoPlay(this.videoID);
    }
    pausar() {
        videoStop(this.videoID);
    }
}

// /////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////


// Obejto Literal
const natalia = {
    name: "Natlia",
    age: 18,
    cursosAprobados: [
        "Curso Definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS",
    ],
    aprobarCurso(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito);
    }
};

// PROTOTIPO
function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    
    // this.aprobarCurso = function(nuevoCursito){
    //     this.cursosAprobados.push(nuevoCursito);
    // }
}

Student.prototype.aprobarCurso = function(nuevoCursito){
    this.cursosAprobados.push(nuevoCursito);
}

const juanita = new Student(
    "Juanita Alejandra",
    22,
    [
        "Curso de Introducción a los videojuegos",
        "Curso de Creación de Personajes"
    ]
);

// Prototipos con al sintaxis de CLASES:
class Student2 {
    constructor(name, age, cursosAprobados) {
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }

    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    }
}

const miguelito = new Student2(
    "Miguel",
    "24",
    [
        "Curso de Análisis de Negocios",
        "Curso de Principios de Visualización"
    ]
);

// ======================================================
class Student3 {
    constructor({
        name, 
        age, 
        instagram, 
        twitter, 
        facebook, 
        cursosAprobados = [],
        email
    }) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
        this.facebook = facebook;
    }

    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    }
}

const evercito = new Student3({
    email: "everxd@gmail.com",
    age: 29,
    name: "Ever",
    cursosAprobados: [
        "Curso de Arduino and iot",
        "Curuso Programación Básica"
    ]
});


// ============================================
// ============================================
// ============================================

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

const miguelito1 = {
    name: "Miguelito",
    username: "miguelitoFeliz",
    points: 1200,
    socialMedia: {
        tewitter: "miguelito_Feliz",
        instagram: "miguelito_Feliz",
        facebook: undefined,
    },
    approvedCourses: [
        "Curso DataBusiness",
        "Curso DataViz",
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
            name: "Escuela de Data Science",
            courses: [
                "Curso DataBusiness",
                "Curso DataViz",
                "Curso Tableau",
            ]
        },
    ]
}

// ============================================
// ============================================
// ============================================

class Student4 {
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
}

// Crea los atributos y métodos de una ruta de aprendizaje
class LearningPath {
    constructor({
        name,
        courses = [],
    }) {
        this.name = name;
        this.courses = courses;
    }

    agragarNameRuta(nameNuevo) {
        this.name = nameNuevo;
    }

    agregarCursoRuta(curso) {
        this.courses.push(curso);
    }
}

// Luego crear una instancia para cada escuela que vayamos a necesitar
const escuelaWeb = new LearningPath({
    name: "Escuela de Desarrollo Web",
    courses: [
        "Curso Definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS",
        "Curso de Responsive Design",
    ],
});

const escuelaData = new LearningPath({
    name: "Escuela de Data Science",
    courses: [
        "Curso básico de Python",
        "Curso Avanzado de Python",
        "Data Analitic Básico",
    ],
});

const escuelaVgs = new LearningPath({
    name: "Escuela de Videojuegos",
    courses: [
        "Curso Básico de Programación",
        "Curso Básico de Udemy",
        "Curso Avanzado de Udemy",
    ],
});

// ///////////////////////////////////////////////////////////////

const juan2 = new Student4({
    name: "JuanXD",
    username: "juanxd",
    email: "juanito@gmail.com",
    twitter: "fjuandc@twitter.com",
    learningPaths: [
        escuelaWeb,
        escuelaVgs
    ],
});

const miguelito2 = new Student4({
    name: "MiguelitoXD",
    username: "Miguelito2xd_feliz",
    email: "miguelito2xd@gmail.com",
    instagram: "miguelito@insta.com",
    learningPaths: [
        escuelaWeb,
        escuelaData
    ],
});

// ///////////////////////////////////////////////////////////////////
class Course {
    constructor({
        name,
        classes = [],
    }) {
        this._name = name;
        this.classes = classes;
    }

    get name() {
        return this._name;
    }

    set name(nuevoNombrecito) {
        if(nuevoNombrecito === "Curso Malito de Prgramación Básica") {
            console.error("Web... no");
        } else {
            this._name = nuevoNombrecito;
        }
    }

}

// ///////////////////////////////////////////////////////////////////////
function Course2(name, classes) {
    this.name = name;
    this.classes = classes;
    return {
        getName: () => {
            return this.name;
        },
        setName: (nuevoNombrecito) => {
            this.name = nuevoNombrecito;
        },
    }
}

const iot = new Course2("IoT",[11,22,33,44]);
const dataBase = new Course2("Bases de Datos",[100,200,300]);

// ///////////////////////////////////////////////////////////////////////
function Course3({
    name,
    classes = [],
}) {
    this.name = name;
    this.classes = classes;
    return {
        getName: () => {
            return this.name;
        },
        setName: (nuevoNombrecito) => {
            if(nuevoNombrecito === "hola mundo"){
                console.warn("NOP --- X");
            } else {
                this.name = nuevoNombrecito;
            }
        },
    }
}

const desarrolloWeb = new Course3({
    name: "Desarrollo Web",
    classes: [41,42,43,44,45,46],
});
const desarrolloWeb2 = new Course3({
    name: "Desarrollo Web Z",
});
