function numero(x)  {
    return(Math.floor(Math.random()* x + 1));
}

var escudos = newArray()
escudo[0] = "imagen1.jpg";
escudo[1] = "imagen2.jpg";
escudo[2] = "imagen4.png";
escudo[3] = "imagen5.jpg";
escudo[4] = "imagen6.png";

function mostrarImagen() {
    document.getElementById("imgal").src = escudos[numero(5)-1];
}