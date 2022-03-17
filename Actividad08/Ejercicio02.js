/* Mediante una función, y dado un arreglo de enteros var numbers = [1,2,3,4,10,11],
encuentra la suma de sus elementos */


function sumaDeElementosDeUnArreglo(){
    let numbers = [1,2,3,4,10,11]
    let i = 0
    let suma = 0

    for(i; i<numbers.length; i++){
        suma = suma + numbers[i]
    }
    return suma;
}

var resultadoSuma = sumaDeElementosDeUnArreglo()
console.log("La suma de los elementos del arreglo es: "+resultadoSuma)