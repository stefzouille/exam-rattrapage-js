// sumAll.js
// Ecrire une fonction sumAll qui prend comme paramètre un tableau de number 
// et retourne la somme de tous les nombres de ce tableau

const sumAll = (tab) => {
    let sum = 0                                         //assigne 0 a la variable sum
  for (elem of tab) {                                 //pour l elem du tableau
    sum += elem                                       
  }
  return sum + tab.length                             //renvoi la variable sum de la longeur du tab
}

console.log(sumAll([5, 10, 5, 10]))
console.log(sumAll([10, 10, 10]))


//no pas bon il prend en compte le nombre d index avec j arrive pas a lui dire de ne pas en tenir compte...