// Código del cuadrado
var cuadrado_lado = 5;
function cuadrado_perimetro(lado) {
    return lado * 4;
} 
function cuadrado_area(lado) {
    return lado * lado;
}
console.group("CUADRADO");
console.groupEnd();

function calcularPerimetroCuadrado() {
    var inputCuadrado = document.getElementById("inputCuadrado");
    var ladoCuadrado = inputCuadrado.value;
    var perimetro = cuadrado_perimetro(ladoCuadrado);
    alert(`Perimetro: ${perimetro}cm`);
}
function calcularAreaCuadrado() {
    var inputCuadrado = document.getElementById("inputCuadrado");
    var ladoCuadrado = inputCuadrado.value;
    var area = cuadrado_area(ladoCuadrado);
    alert(`Área: ${area}cm^2`);
}

//Código del Triángulo
function triangulo_semiperimetro(l1,l2,l3) {
    var coso = (parseFloat(l1) + parseFloat(l2) + parseFloat(l3)) / 2;
    return coso;
}
function triangulo_perimetro(l1,l2,l3) {
    var perimetro = triangulo_semiperimetro(l1,l2,l3) * 2;
    return perimetro;
}
function triangulo_area(l1,l2,l3) {
    var s = triangulo_semiperimetro(l1,l2,l3);
    var area = Math.sqrt(s*(s-l1)*(s-l2)*(s-l3));
    return area;
}
console.group("Triángulo");
console.groupEnd();
function calcularPerimetroTriangulo() {
    var trianguloL1 = document.getElementById("input--lado1").value;
    var trianguloL2 = document.getElementById("input--lado2").value;
    var trianguloL3 = document.getElementById("input--lado3").value;
    var perimetro = triangulo_perimetro(trianguloL1,trianguloL2,trianguloL3);
    alert(`Perimetro: ${perimetro}cm`);
}
function calcularAreaTriangulo() {
    var L1 = document.getElementById("input--lado1").value;
    var L2 = document.getElementById("input--lado2").value;
    var L3 = document.getElementById("input--lado3").value;
    var area = triangulo_area(L1,L2,L3);
    alert(`Área: ${area}cm^2`);
}

//Código del Círculo
// var pi = 3.14;
var pi = Math.PI;
function circulo_diámetro(radio) {
    return radio*2;
}
function circulo_periemtro(radio) {
    return 2*pi*radio;
}
function circulo_area(radio) {
    return pi*radio*radio;
}
console.group("Círculos");
console.groupEnd();
function calcularPerimetroCirculo() {
    var radio = document.getElementById("input--radio").value;
    var perimetro = circulo_periemtro(radio);
    alert(`Perimetro: ${perimetro}`);
}
function calcularAreaCirculo() {
    var radio = document.getElementById("input--radio").value;
    var area = circulo_area(radio);
    alert(`Área: ${area}`);
}

var coso = document.getElementById("triangulo__title").onclick(reto);
function reto() {
    alert("Te tengo");
}

// ==============================
// ============ RETO ============
// ==============================
function trianguloObject(l1,l2,l3) {
    this.l1 = parseFloat(l1);
    this.l2 = parseFloat(l2);
    this.l3 = parseFloat(l3);
}

function tomarValoresDelTriangulo(){
    var l1 = document.getElementById("input--lado1").value;
    var l2 = document.getElementById("input--lado2").value;
    var l3 = document.getElementById("input--lado3").value;
    var cosoTriangular = new trianguloObject(l1,l2,l3);
    return cosoTriangular;
}

function reto1Triangulo() {
    var triangulo = tomarValoresDelTriangulo();
    var esIsosceles = false;
    var ladoIgual;
    var ladoDiferente;
    switch(true) {
        case triangulo.l1 == triangulo.l2:
            esIsosceles = true;
            ladoIgual = triangulo.l1;
            ladoDiferente = triangulo.l3;
            break;
        case triangulo.l1 == triangulo.l3:
            esIsosceles = true;
            ladoIgual = triangulo.l1;
            ladoDiferente = triangulo.l2;
            break;
        case triangulo.l2 == triangulo.l3:
            esIsosceles = true;
            ladoIgual = triangulo.l2;
            ladoDiferente = triangulo.l1;
            break;
        default:
            esIsosceles = false;
    }
    if(!esIsosceles) {
        alert("No es un triángulo Isosceles");
    }
    else {
        var altura = Math.sqrt(Math.pow(ladoIgual,2) - Math.pow(ladoDiferente/2,2));
        alert(`ES UN TRIÁNGULO ISOSCELES \nSu Altura: ${altura} cm`);
    }
}