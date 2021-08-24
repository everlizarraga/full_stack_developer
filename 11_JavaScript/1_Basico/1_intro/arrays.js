var frutas = ["manzana","banana","ananá","papaya","mandarina","naranja","frutilla"];

var estudiantes = ["Ever","Rolando","Zeta","Liza"];

function saludarEstudiante(estudiante){
    console.log(`Hola, ${estudiante}`);
}

for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiante(estudiantes[i]);
}

for(var estudiante of estudiantes) {
    saludarEstudiante(estudiante);
}

while(estudiantes.length > 0) {
    saludarEstudiante(estudiantes.shift());
}




function frutasReporte(listadoFrutas) {
    for(var coso of listadoFrutas) {
        console.log(`-> ${coso}`);
    }
}

