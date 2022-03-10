var numeroUno = Number(prompt("Ingrese el número 1"))
var numeroDos = Number(prompt("Ingrese el número 2"))
var numeroTres = Number(prompt("Ingrese el número 3"))

if(numeroUno > numeroDos && numeroUno > numeroTres){
    console.log("El numero", numeroUno, "es mayor")

    if(numeroUno == numeroDos){
        console.log("Y el numero 1 es igual al numero 2")
    }
    else if(numeroUno == numeroTres){
        console.log("Y el numero 1 es igual al numero 3" )
    }
    else if(numeroDos == numeroTres){
        console.log("Y el numero 2 es igual al numero 3")
    }
}
else if(numeroDos > numeroUno && numeroDos > numeroTres){
    console.log("El numero", numeroDos, "es mayor")
    if(numeroUno == numeroDos){
        console.log("Y el numero 1 es igual al numero 2")
    }
    else if(numeroUno == numeroTres){
        console.log("Y el numero 1 es igual al numero 3" )
    }
    else if(numeroDos == numeroTres){
        console.log("Y el numero 2 es igual al numero 3")
    }
}
else if(numeroTres > numeroDos && numeroTres > numeroUno){
    console.log("El numero", numeroTres, "es mayor")
    if(numeroUno == numeroDos){
        console.log("Y el numero 1 es igual al numero 2")
    }
    else if(numeroUno == numeroTres){
        console.log("Y el numero 1 es igual al numero 3" )
    }
    else if(numeroDos == numeroTres){
        console.log("Y el numero 2 es igual al numero 3")
    }
}
