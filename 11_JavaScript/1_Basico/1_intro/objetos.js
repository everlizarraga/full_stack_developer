var objeto = {};

var miAuto = {
    marca: "Toyota",
    modelo: "Corola",
    anio: 2020,
    detalleDelAuto: function() {
        console.log(`Auto ${this.modelo} ${this.anio}`);
    }
};

function auto(marca, modelo, anio) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
}

var autoNuevo = new auto("Tesla", "Model 3", 2020);
var autoNuevo2 = new auto("Tesla", "Model X", 2018);
var autoNuevo3 = new auto("Toyota", "Corola", 2020);

function humano(nombre,apellido,nombre_usuario,edad,correo_electronico,mayorDeEdad,dinero_ahorrado,deudas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.nombre_usuario = nombre_usuario;
    this.edad = edad;
    this.correo_electronico = correo_electronico;
    this.edad = edad;
    this.correo_electronico = correo_electronico;
    this.mayorDeEdad = mayorDeEdad;
    this.dinero_ahorrado = dinero_ahorrado;
    this.deudas = deudas;
}

var persona1 = new humano(
    "Ever",
    "Lizarraga",
    "rolank",
    29,
    "ever.platzi@gmail.com",
    true,
    150000,
    1200
);

function reporte(persona) {
    console.log(`>> ${persona.nombre} ${persona.apellido}`);
    var calculoDeDeuda = persona.dinero_ahorrado - persona.deudas;
    console.log(">> $ " + calculoDeDeuda);
}

var cryptos = ["BTC","ETH","XRP","USDT","ADA","XEC"];

function miArray_firstValue(cosoArray) {
    console.log(cosoArray[0]);
}

function miArray_print(cosoArray) {
    for(var coso of cosoArray){
        console.log(`>>> [${coso}]`);
    }
}

