// Ecrire une fonction convertEuroToDollar qui fait la conversion
//  d'une somme exprimée en Euros, en Dollars. 1 euro est égal à 1.18 dollars


const RATIO =  1.18
const convertEuroToDollar = (sum) => {
  return  RATIO * sum
}

 
console.log(`${convertEuroToDollar(10)} Dollars.`)