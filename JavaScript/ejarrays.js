const palabras=["Comer","Beber","Dormir","Jugar"]
function añadir (array)  {
    document.getElementById("anadir").innerHTML = palabras;
    palabras.push("Experimentar");
}

function eliminar (array)   {
    document.getElementById("anadir").innerHTML = palabras;
    palabras.pop();
}
function creciente (array){
    document.getElementById("anadir").innerHTML = palabras;
    palabras.sort();
}
function decreciente (array){
    document.getElementById("anadir").innerHTML = palabras;
    palabras.reverse();
}
function posicion (array){
    document.getElementById("position").innerHTML = palabras;
    palabras.indexOf("Comer");
}

