/* Desarrolla un método para verificar si una palabra es un palíndromo. Casos de prueba:
var word1='madam' var word2='computadora' */

function buscarPalíndromos(word){

    let arrayWord = word.split('')
    let arrayWordR = arrayWord.reverse()
    let arrayWordRJoin = arrayWordR.join('')

   if(word == arrayWordRJoin){
        return 'Sí es palíndromo'
   }else{
      return 'No es palindromo'
   }
}

var resultado = buscarPalíndromos("compu")
console.log(resultado)




