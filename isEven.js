// isEven.js
// Ecrire une fonction isEven qui prend un nombre en paramètre et qui devra retourner true 
// si le nombre passé en paramètre est pair, sinon la fonction retournera false.

const isEven = (nb) => {
  if (nb % 2 === 0) {
    return true
  } else {
    return false
  }
}

console.log(`nombre impair donne :${isEven(3)}`)
console.log(`nombre pair donne   :${isEven(2)}`)