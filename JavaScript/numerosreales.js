var numeros = []

function anadir () {
    var n =parseFloat(document.getElementById("n").value);
    numeros.push(n);
    document.getElementById("nreales").innerHTML = numeros
}

var s = 0  // solo se ejecuta la primera vez 
function sumar () {
    s = 0;          // se ejecuta cada vez que le demos a sumar
    for (var i = 0; i<numeros.length; i++)  {
        s += numeros[i];
    }
    document.getElementById("nreales").innerHTML = s
}

function multiplicar()  {
    var m = 1
    for (var i = 0; i< numeros.length; i++) {       //for se repite , inicializacion,condicion,incremento
        m = m * numeros[i];
    }
    document.getElementById("nreales").innerHTML = m;
}
