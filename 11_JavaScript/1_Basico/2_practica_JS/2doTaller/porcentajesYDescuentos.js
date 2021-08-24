// alert("Hola Mundo");

function precioConDescuento(precio, descuento) {
    var precioDescuento = precio*1 - precio*descuento/100;
    return precioDescuento;
}

function oneClicPriceDiscount() {
    var precio = document.getElementById("inputPrice").value;
    var descuento = document.getElementById("inputDiscount").value;
    var precioFinal = precioConDescuento(precio,descuento);
    var reporte = document.getElementById("resultadoP");
    reporte.innerText = `El precio es: $ ${precioFinal}`;
    // alert(`Precio Final: $ ${precioFinal}`);
}