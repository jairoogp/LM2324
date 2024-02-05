var calificaciones = []

function calificacion  ()   {
    var n = parseFloat(document.getElementById("c").value);
    calificaciones.push(n);
    document.getElementById("calificaciones").innerHTML = calificaciones;

    var numeroCorrecto = parseFloat(numero)
    if (numeroCorrecto >=0 && numeroCorrecto<=10) {
       return numeroCorrecto;
    }

    else    {
        return null;
    }

}
