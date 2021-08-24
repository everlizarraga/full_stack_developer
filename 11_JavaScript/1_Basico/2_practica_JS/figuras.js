console.log("Hola Mundo JS");

// Código del cuadrado
var cuadrado_lado = 5;
var cuadrado_perimetro = cuadrado_lado * 4;
var cuadrado_area = cuadrado_lado * cuadrado_lado;
console.group("CUADRADO");
console.log("Mi Cuadrado");
console.log(`Cuadrado [L:${cuadrado_lado}cm] -> Per:${cuadrado_perimetro}cm | Area:${cuadrado_area}cm^2`);
console.groupEnd();

//Código del Triángulo
var triangulo_L1 = 6;
var triangulo_L2 = 6;
var triangulo_L3 = 4;
var triangulo_H = 5.5;
var triangulo_perimetro = triangulo_L1+triangulo_L2+triangulo_L3;
var triangulo_area = triangulo_L3*triangulo_H / 2;
console.group("Triángulo");
console.log("Mi triáangulo");
console.log(`L1:${triangulo_L1}cm | L2:${triangulo_L2}cm | L3:${triangulo_L3}cm | H:${triangulo_H}cm`);
console.log(`Perimetro: ${triangulo_perimetro}cm`);
console.log(`área: ${triangulo_area}cm^2`);
console.groupEnd();

//Código del Círculo
// var pi = 3.14;
var pi = Math.PI;
var radio = 4;
var circulo_diámetro = radio*2;
var circulo_periemtro = 2*pi*radio;
var circulo_area = pi*radio*radio;
console.group("Círculos");
console.log(`PI: ${pi}`);
console.log(`Diámetro: ${circulo_diámetro}cm`);
console.log(`Perímetro: ${circulo_periemtro}cm`);
console.log(`Área: ${circulo_area}cm^2`);
console.groupEnd();