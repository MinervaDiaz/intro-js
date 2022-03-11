//Construye un código bajo las siguientes reglas:
// °Itera arreglo = [1,4,6,10,22,55,46,2,5,0] utilizando un ciclo for
// °Imprime en consola los valores que sean mayores 3

var arreglo = [1,4,6,10,22,55,46,2,5,0]

console.log("Los valores mayores a 3 son: ")
for(var i=0; i<arreglo.length; i++){
    if(arreglo[i]>3){
    console.log("Número ",arreglo[i]);
    }
}