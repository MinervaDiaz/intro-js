/* Crear una función que recibe 2 parámetros (una oración y la palabra a buscar).
Retornar true o false en caso de que una oración contenga la palabra dada, es decir,
si yo mando "Hola mundo" y mando la palabra a buscar "perro" me debe retornar un false.
En cambio si mando "mundo" entonces debe retornar true. */

    var oracion = 'Hola mundo'
    var palabra = 'perro'

function texto (oracion, palabra){
    
    let arreglo = oracion.split('')
    let contador = 0
    let contador2=0
    

    oracionArreglo = arreglo
    palabraArreglo = palabra.split('')

    let i=0
    while(i<oracionArreglo.length){
        if(oracionArreglo[i]==palabraArreglo[contador]){
            i++
            contador++
            contador2++
        }
        else if(oracionArreglo[i]!=palabraArreglo[contador]){
            i++
            contador2=0
        }
    }
    if(contador2 == palabraArreglo.length){
        resultado01 =  'true'
    }
    else if(contador2 != palabraArreglo.length){
        resultado01 = 'false'
    } 
    return resultado01
}
var resultado = texto(oracion, palabra)
console.log(resultado)