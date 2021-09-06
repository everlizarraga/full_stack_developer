const juan = {
    name: "Juancito",
    age: "18",
    approvedCourses: ["Curso 1"],

    addCourse(newCourse) {
        this.approvedCourses.push(newCourse);
        console.log("This", this);
        console.log("This.approvedCourses", this.approvedCourses);
    }
};

// console.log(Object.keys(juan));
// console.log(Object.getOwnPropertyNames(juan));
// console.log(Object.entries(juan));

Object.seal(juan);  // CONFIGURABLE = FALSE
Object.freeze(juan);    // CONFIGURABLE = WRITABLE = FALSE

console.log(Object.getOwnPropertyDescriptors(juan));
