var indice = 0;
var totalFotos=6 ;  // el array tendria sentido si laf toso los nombres fueran diferentes
function publicidad(){
    const misFotos = setInterval(displayImagenes,3000);
}
var enlaces = ["https://store.dsautomobiles.es/configurable","https://www.elcorteingles.es/supermercado/","https://www.elcorteingles.es/daitsu/electrodomesticos/aire-acondicionado/","https://www.madridhifi.com","https://launidad.movistarplus.es/?dis_c=331187589&dclid=CL-Lt9zx4_YCFdZEHQkdLpkExQ","https://www.tikamoon.es" ]
function displayImagenes()  {
    if (indice==totalFotos -1)  {}
    document.getElementById("imagenes").src = "banner"+indice+".png";
    document.getElementById("enlace").href = enlaces;
}

function pulsa()    {
    //window.open(enlaces[indice]); Esto si tuviera un array con todas las direcciones
    switch(indice)  {
        case 0:window.open("https://store.dsautomobiles.es/configurable");break;
        case 1:window.open("https://www.elcorteingles.es/supermercado/");break;
        case 2:window.open("https://www.elcorteingles.es/daitsu/electrodomesticos/aire-acondicionado/");break;
        case 3:window.open("https://www.madridhifi.com");break;
        case 4:window.open("https://launidad.movistarplus.es/?dis_c=331187589&dclid=CL-Lt9zx4_YCFdZEHQkdLpkExQ");break;
        case 5:window.open("https://www.tikamoon.es");break;
    }
    window.onload = publicidad();
}