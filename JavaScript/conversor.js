/* Código Javascript del conversor */
function convertir (divisa){
     //   let valor = document.getElementById("cantidad").value;
        let resultado = 0;
        if(divisa=="euro")  {
            // Convierto a euro
            resultado = document.getElementById("cantidad").value * 0.91;
            document.getElementById("resultado").innerHTML = resultado + "€";
        }
        else /*(divisa=="dolares")*/ {
            // Convierto a dolares
            resultado = document.getElementById("cantidad").value * 1.09;
            document.getElementById("resultado").innerHTML = resultado + "$";  
        }
}