var numeros = [1,3,9,0,45,98,12,24,64,32,35,567,34]

function mayor (vector)    {
    let mayor = vector[0]; // por defecto el primer elemento es el mayor
    for(var i=0;i<vector.length;i++){
        if(vector[i]>mayor)
        mayor = vector[i];

    }
    return mayor;
    
}