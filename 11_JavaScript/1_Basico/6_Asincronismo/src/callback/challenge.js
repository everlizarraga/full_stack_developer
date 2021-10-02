let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/';

function fetchData(url_api, callback) {
    let xhttp = new XMLHttpRequest();   // Instanciamos el objeto que necesitamos traabajar.
    xhttp.open('GET', url_api, true);   // Hacemos el llamado a una URL, El ultimo parametro es para decirle que sea asincrona
    xhttp.onreadystatechange = function(event) {    // Luegeo Tengo que escuchar lo que va a hacer esa conexión 
        // Luego tengo el espacio para hacer validaciones necesarios para ver si el estado en el q se encuentra es satisfactorio.
        if(xhttp.readyState === 4) {
            if(xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText)); // Como se recibe un string, se lo parsea para poder acceder a los valores.
            } else {
                const error = new Error('Error ' + url_api);
                return callback(error, null);
            }
        }
    }
    xhttp.send();   // Acá se envía la solicitud
}


fetchData(API, function(error1, data1) {
    if(error1) return console.error(error1);
    fetchData(API + data1.results[0].id, function(error2, data2) {
        if(error2) return console.error(error2);
        fetchData(data2.origin.url, function(error3, data3) {
            if(error3) return console.error(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        });
    })
});