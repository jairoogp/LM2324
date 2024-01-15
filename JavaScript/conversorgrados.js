function convertir(grados)    {
    if(grados=="fahrenheit") {
        resultado = document.getElementById("cantidad").value * 9/5 + 32;
        document.getElementById("resultado").innerHTML = resultado + "º F";
    }
}