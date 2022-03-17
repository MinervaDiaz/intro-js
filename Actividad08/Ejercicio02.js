/* Mediante una función, y dado un arreglo de enteros var numbers = [1,2,3,4,10,11],
encuentra la suma de sus elementos */

    

    function sumaDeElementosDeUnArreglo(arrayNumbers){
        let i = 0
        let suma = 0

        for(i; i<arrayNumbers.length; i++){
            suma = suma + numbers[i]
        }
        return suma;
    }
    
    var numbers = [1,2,3,4,10,11]
    var resultadoSuma = sumaDeElementosDeUnArreglo(numbers)
    console.log("La suma de los elementos del arreglo es: "+resultadoSuma)