var salariosCol = colombia.map(coso => coso.salary);

var salariosColSorted = salariosCol.sort((a,b) => a-b);

function esPar(numerito) {
    return (numerito % 2 === 0);
}

function calcularMediaAritmetica(lista) {
    var sumaLista = lista.reduce((acumulador=0,nuevoElelemto) => acumulador+nuevoElelemto);
    return sumaLista / lista.length;
}

function medianaSalarios(lista) {
    var mitad = parseInt(lista.length / 2);
    if(esPar(lista.length)) {
        var personaMitad1 = lista[mitad - 1];
        var personaMitad2 = lista[mitad];

        var mediana = calcularMediaAritmetica([personaMitad1,personaMitad2]);
        return mediana;

    } else {
        var personaMitad = lista[mitad];
        return personaMitad;
    }
}

var medianaGeneralCol = medianaSalarios(salariosColSorted);



var spliceStart = salariosColSorted.length*90 / 100;
var spliceCount = salariosColSorted.length - spliceStart;
var salariosColTop10 = salariosColSorted.splice(spliceStart,spliceCount);

var medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col
});

