// Usando while, crea un programa que pregunte al usuario un número. Mostrar los números que son múltiplos
// de 5 desde 1 hasta el número introducido por el usuario.

var numero = Number(prompt("Ingrese un número"))

var index = 1;
while(  index <= numero){
    if(index % 5 == 0){
    console.log(index)
    }
    index++;
}