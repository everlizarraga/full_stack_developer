var piedra = "piedra";
var papel = "papel";
var tijera = "tijera";

var humano = piedra;
var compu = papel;

var cont_humano = 0;
var cont_compu = 0;

function juego() {
    switch(true) {
        case (humano == compu):
            console.log("Empate");
            break;
        case (humano==piedra && compu==tijera):
            cont_humano++;
            console.log("Humano Gana ["+ cont_humano +"]");
            break;
        case (humano==papel && compu==piedra):
            cont_humano++;
            console.log("Humano Gana ["+ cont_humano +"]");
            break;
        case (humano==tijera && compu==papel):
            cont_humano++;
            console.log("Humano Gana ["+ cont_humano +"]");
            break;
        default:
            cont_compu++;
            console.log("Compu Win !!! ["+ cont_compu +"]");
    }
}
