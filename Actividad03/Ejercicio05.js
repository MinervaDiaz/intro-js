var numeroUno = Number(prompt("Ingrese el número 1"))
var numeroDos = Number(prompt("Ingrese el número 2"))
var numeroTres = Number(prompt("Ingrese el número 3"))

//DETERMINAR CUÁL DE LOS TRES NÚMEROS ES MAYOR Y SI LOS DOS RESTANTES SON IGUALES
if(numeroUno > numeroDos && numeroUno > numeroTres){
    console.log("El número", numeroUno, "es mayor")
    if(numeroDos == numeroTres){
        console.log("El número 2:",numeroDos, "y el número 3:",numeroTres," son iguales")
    }
}
else if(numeroDos > numeroUno && numeroDos > numeroTres){
    console.log("El número", numeroDos, "es mayor")
    if(numeroUno == numeroTres){
        console.log("El número 1:",numeroUno, "y el número 3:",numeroTres," son iguales")
    }
}
else if(numeroTres > numeroDos && numeroTres > numeroUno){
    console.log("El número", numeroTres, "es mayor")
    if(numeroUno == numeroDos){
        console.log("El número 1:",numeroUno, "y el número 2:",numeroDos," son iguales")
    }
}
//DETERMINAR SI LOS TRES NÚMEROS SON IGUALES
if (numeroUno == numeroDos && numeroUno == numeroTres){
    console.log("Los tres números son iguales. Número 1:",numeroUno,"Número 2:",numeroDos," Número 3:",numeroTres)
}