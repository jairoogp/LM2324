function random(min, max)  {
    return(Math.floor(Math.random() * (max - min +1)) + min);
}

var escudos = ["imagen1.jpg","imagen2.jpg","imagen4.png","imagen5.jpg","imagen6.png"];


function mostrarImagen() {
    var numero = random(0,escudos.length -1);
    document.getElementById("imgal").src = "images/" + escudos[numero];
}