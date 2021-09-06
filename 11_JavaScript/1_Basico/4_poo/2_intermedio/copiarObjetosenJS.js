function isObject(subject) {
    return typeof subject == "object";
}
function isArray(subject) {
    return Array.isArray(subject);
}

function deepCopy(subject) {
    let copySubject;

    const subjectIsArray = isArray(subject);
    const subjectIsObject = isObject(subject);

    if(subjectIsArray) {
        copySubject = [];
    } else if(subjectIsObject) {
        copySubject = {};
    } else {
        return subject;
    }

    for(key in subject) {
        const keyIsObject = isObject(subject[key]);
        if(keyIsObject) {
            copySubject[key] = deepCopy(subject[key]);
        } else {
            if(subjectIsArray) {
                copySubject.push(subject[key]);
            } else {
                copySubject[key] = subject[key];
            }
        }
    }
    return copySubject;
}

// //////////////////////////////////////////////////
// //////////////////////////////////////////////////

// class SuperObject {

//     static isObject(subject) {
//         return typeof subject == "object";
//     }

//     static deepCopy(subject) {
//         let copySubject;
    
//         const subjectIsArray = isArray(subject);
//         const subjectIsObject = isObject(subject);
    
//         if(subjectIsArray) {
//             copySubject = [];
//         } else if(subjectIsObject) {
//             copySubject = {};
//         } else {
//             return subject;
//         }
    
//         for(key in subject) {
//             const keyIsObject = isObject(subject[key]);
//             if(keyIsObject) {
//                 copySubject[key] = deepCopy(subject[key]);
//             } else {
//                 if(subjectIsArray) {
//                     copySubject.push(subject[key]);
//                 } else {
//                     copySubject[key] = subject[key];
//                 }
//             }
//         }
//         return copySubject;
//     }
// }

// //////////////////////////////////////////////////

function SuperObject() {}
// SuperObject.prototype.deepCopy = function() {}   // Esto es un método normal, al que accederiamos con .THIS

SuperObject.isObject = function(subject) {
    return typeof subject == "object";
}

SuperObject.deepCopy = function(subject) {  // Si le saco el prototype se convierte en estátio
    let copySubject;

    const subjectIsArray = isArray(subject);
    const subjectIsObject = isObject(subject);

    if(subjectIsArray) {
        copySubject = [];
    } else if(subjectIsObject) {
        copySubject = {};
    } else {
        return subject;
    }

    for(key in subject) {
        const keyIsObject = isObject(subject[key]);
        if(keyIsObject) {
            copySubject[key] = deepCopy(subject[key]);
        } else {
            if(subjectIsArray) {
                copySubject.push(subject[key]);
            } else {
                copySubject[key] = subject[key];
            }
        }
    }
    return copySubject;
}    



// //////////////////////////////////////////////////
// //////////////////////////////////////////////////
// Fabrica de estudiantes

function requiredParam(param) {
    throw new Error(param + " es obligatorio"); // Esto tira un erro en la consola
}

// ///////////////////////////////////////////

function LearningPath({
    name = requiredParam("name"),
    courses = [],
}) {
    this.name = name;
    this.courses = courses;
}


// ///////////////////////////////////////////

function Student({
    name = requiredParam("name"),
    email = requiredParam("email"),
    age,
    twitter,
    facebook,
    instagram,
    approvedCourses = [],
    learningPaths = [],
} = {}) {
    
    this.name = name;
    this.email = email;
    this.age = age;
    this.approvedCourses = approvedCourses;
    this.socialMedia = {
        twitter,
        instagram,
        facebook,
    };

    const private = {
        "_learningPaths": [],
    };

    // this.learningPaths = function() {}
    Object.defineProperty(this,"learningPaths",{
        get() {
            return private["_learningPaths"];
        },
        set(newLP) {
            if(newLP instanceof LearningPath) {
                private["_learningPaths"].push(newLP);
            } else {
                console.warn("SET>>Alguno de los LP no es una instancia del prototypo LearningParh");
            }
        }
    });

    // Esto solo se ejecuta una vez al instanciar al objeto
    // Y por cada vez que intenta asignar se invoca al SETTER
    for(index in learningPaths) {
        this.learningPaths = learningPaths[index];
    }
}


// Student.prototype.learningPaths = function() {}



const escuelaWeb = new LearningPath({name: "Escuela de Desarrollo Web", courses: ["C1","C2"]});
const escuelaData = new LearningPath({name: "Escuela de Desarrollo Data Base", courses: ["D1","D2","D3"]});
const escuelaJava = new LearningPath({name: "Escuela de Desarrollo en JAVA", courses: ["JJ1","JJ2"]});

const juan = new Student({
    name: "Juanito",
    age: 18,
    email: "juancito@platzi.com",
    twitter: "fjuandc.Twitter",
    learningPaths: [
        escuelaWeb,
        escuelaData,
        "rancio",
    ],
});



// juan.learningPaths = "Nueva ruta de aprendizaje";

const pedro = new Student({
    name: "Pedro",
    age: 25,
    email: "pedro.platzi@gmail.com",
    // learningPaths: 
});

// ////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////

