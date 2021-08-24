var piedra = "piedra";
var papel = "papel";
var tijera = "tijera";

var humano = piedra;
var compu = papel;

var cont_humano = 0;
var cont_compu = 0;

function juego(){
    if(humano == compu){
        cont_humano += 0;
        cont_compu += 0;
        console.log("Empate");
    }else if(humano == papel){
        if(compu == piedra){
            cont_humano++;
            console.log("!!!! Humano Win >> ["+ cont_humano +"]");
        }else {
            cont_compu++;
            console.log("Compu Win >> ["+ cont_compu +"]");
        }
    }else if(humano == piedra){
        if(compu == papel){
            cont_compu++;
            console.log("Compu Win >> ["+ cont_compu +"]");
        }else{
            cont_humano++;
            console.log("!!!! Humano Win >> ["+ cont_humano +"]");
        }
    }else if(humano == tijera){
        if(compu == papel){
            cont_humano++;
            console.log("!!!! Humano Win >> ["+ cont_humano +"]");
        }else {
            cont_compu++;
            console.log("Compu Win >> ["+ cont_compu +"]");
        }
    }
}