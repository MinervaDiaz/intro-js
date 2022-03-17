/* Crear una función que recibe 2 parámetros (una oración y la palabra a buscar).
Retornar true o false en caso de que una oración contenga una palabra dada, es decir,
si yo mando "Hola mundo" y mando la palabra a buscar "perro" me debe retornar un false.
En cambio si mando "mundo" entonces debe retornar true. */

    
function texto (oracion, palabra){
    
    let arregloOracion = oracion.split('') 
    let arregloPalabra= palabra.split('') 

    let contador = 0
    let i=0

    while(i<arregloOracion.length){
        if(arregloOracion[i]==arregloPalabra[contador]){
            contador++
        }
        i++
    }
    if(contador == arregloPalabra.length){
        return true
    }
    else {
        return false
    } 
}
var oracion = 'Hola mundo'
var palabra = 'mundo'
var resultado = texto(oracion, palabra)
console.log(resultado)