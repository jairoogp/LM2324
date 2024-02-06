var calificaciones = []

function calificacion  ()   {
    var n = parseFloat(document.getElementById("c").value);
    calificaciones.push(n);
    document.getElementById("resultado").innerHTML = calificaciones;

    var numeroCorrecto = parseFloat(n)
    if (numeroCorrecto >=0 && numeroCorrecto<=10) {
       return numeroCorrecto;
    }

    else    {
        return null;
    }

}
function borrar ()  {
    var cadena = document.getElementById("c").value;
    document.getElementById("resultado").innerHTML = ("");
    
}

var r = 0 
function mediaCalificacion ()   {
    r = 0;
    for (var i=0; i<calificaciones.length;i++)  {
        r += calificaciones[i] ; // es lo mismo que poner r = r + calificaciones[i]
    }
    var media = r / calificaciones.length;
    document.getElementById("resultado").innerHTML = ("El resultado de la media es ") + media ;
}
