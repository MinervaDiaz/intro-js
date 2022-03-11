var numeroUno = Number(prompt("Ingrese el número 1"))
var numeroDos = Number(prompt("Ingrese el número 2"))
var numeroTres = Number(prompt("Ingrese el número 3"))

//DETERMINAR CUÁL DE LOS TRES NÚMEROS ES MAYOR
if(numeroUno > numeroDos && numeroUno > numeroTres){
    console.log("El numero", numeroUno, "es mayor")
}
else if(numeroDos > numeroUno && numeroDos > numeroTres){
    console.log("El numero", numeroDos, "es mayor")
}
else if(numeroTres > numeroDos && numeroTres > numeroUno){
    console.log("El numero", numeroTres, "es mayor")
}
//DETERMINAR SI HAY DOS NUMEROS IGUALES SIENDO LOS MAYORES
else if(numeroUno>numeroDos && numeroUno == numeroTres){
    console.log("El numero 1: ",numeroUno," y el numero 3: ",numeroTres," son iguales y son los mayores")
}
else if(numeroUno>numeroTres && numeroUno == numeroDos){
    console.log("El numero 1: ",numeroUno, " y el numero 2: ",numeroDos," son iguales y son los mayores")
}
else if(numeroDos>numeroTres && numeroDos == numeroUno){
    console.log("El numero 2: ",numeroDos," y el numero 1: ",numeroUno," son iguales y son los mayores")
}
else if(numeroDos>numeroUno && numeroDos == numeroTres){
    console.log("El numero 2: ",numeroDos," y el numero 3: ",numeroTres," son iguales y son los mayores")
}
else if(numeroTres>numeroUno && numeroTres == numeroDos){
    console.log("El numero 3: ",numeroTres," y el numero 2: ",numeroDos," son iguales y son los mayores")
}
else if(numeroTres>numeroDos && numeroTres == numeroUno){
    console.log("El numero 3: ",numeroTres," y el numero 2: ",numeroDos," son iguales y son los mayores")
}
//DETERMINAR SI HAY UN NÚMERO MAYOR TENIENDO IGUALES A LOS OTROS DOS
else if(numeroUno > numeroDos && numeroUno > numeroTres && numeroDos==numeroTres){
    console.log("El numero", numeroUno, "es mayor y los numeros 2: ",numeroDos," y 3: ",numeroTres," son iguales")
}
else if(numeroDos > numeroUno && numeroDos > numeroTres && numeroUno==numeroTres){
    console.log("El numero", numeroDos, "es mayor y los numeros 1: ",numeroUno," y 3: ",numeroTres," son iguales")
}
else if(numeroTres > numeroDos && numeroTres > numeroUno){
    console.log("El numero", numeroTres, "es mayor y los numeros 2: ",numeroDos," y 1: ",numeroUno," son iguales")
}
//DETERMINAR SI LOS TRES NÚMEROS SON IGUALES
else{
    console.log("Los tres numeros son iguales. Numero 1: ",numeroUno,"Numero 2: ",numeroDos," Numero 3: ",numeroTres)
}