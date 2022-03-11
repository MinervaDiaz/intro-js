// Crea el mismo problema1, ahora usando Do While

var numero = Number(prompt("Ingrese un número"))

var index = 1
do{
    if(index % 5 == 0){
        console.log(index)
        }
        index++;
}while(  index <= numero)