var numeros = [4,8,9,11,18,22,21,23,26]

function ver (numeros) {
    document.getElementById("mostrar").innerHTML = numeros;
}

var r = 0
function  devolver (numeros)   {
    for (var i=0; i<numeros.length; i++) {
        r += numeros[i]
    }
    document.getElementById("resultado").innerHTML = "Sumando los numeros pares el resultado queda:" + r;


}