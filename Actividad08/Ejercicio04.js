/* Crea un programa, el cual sirva para convertir temperaturas. De Celsius a Fahrenheit y
viceversa. Utiliza las expresiones matemáticas necesarias para la conversión. Que dicho programa reciba 
como argumentos las temperatuas y regresa el resultado imprimiendo en pantalla la conversión. Tu 
solución es  libre a la imaginación. */


function conversionTemperatura(grados, escala){
  let resultado = 0
  
  if(escala == 1){//Convertir de Celsius a Fahrenheit
    resultado  = grados *  1.8 + 32

    return grados+ '° Celsius son '+ resultado+'° Fahrenheit'
  }
  if(escala == 2){ //Convertir de Fahrenheit a Celsius
    resultado = (grados-32)/1.8

    return grados+ '° Fahrenheit son '+ resultado+'° Celsius'
  }
  else{
    return 'Favor de ingresar una de las opciones disponibles'
  }
}

var escalas = Number(prompt("¿Qué desea realizar? \n Ingrese el número de la opción\n 1. Convertir grados Celcius a Fahrenheit \n 2. Convertir grados Fahrenheit a Celsius"))
var gradosAConvertir = Number(prompt("Grados a convertir: "))

var resultadoConversion = conversionTemperatura(gradosAConvertir, escalas)
console.log(resultadoConversion)
