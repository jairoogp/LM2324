var calificaciones = []

function calificacion  ()   {
    var n = parseFloat(document.getElementById("c").value); // parsefloat es para definir que es un numero
    //borramos cualquier mensaje de error previo
    document.getElementById("aviso").innerHTML="";

    if (isNaN(n))   {
        document.getElementById("aviso").innerHTML = "Debes introducir un número entre 1 y 10"
    }

    else {
    
    if (n<0 || n>10) {// Esto es cierto cuando algunos de los dos es cierto   
        document.getElementById("aviso").innerHTML = "Debes introducir un número entre 1 y 10"
    }
    else    {
        calificaciones.push(n);
        document.getElementById("resultado").innerHTML = calificaciones;
    }
}
}

function borrar ()  {
    var cadena = document.getElementById("c").value;
    document.getElementById("resultado").innerHTML ="";
    calificaciones = [];
}

var r = 0.0 
function mediaCalificacion ()   {
    r = 0.0;
    for (var i=0; i<calificaciones.length;i++)  {
        r += calificaciones[i] ; // es lo mismo que poner r = r + calificaciones[i]
    }
    var media = r / calificaciones.length;
    document.getElementById("resultado").innerHTML = ("El resultado de la media es ") + media.toFixed(2) ; // to fixed es para que solo me salgan 2 decimales en el resultado
}
