// Ecrire dans un même fichier ThreeWayLoop.js, 3 boucles différentes for, for-of, forEach qui effectueront le même traitement. 
// Ce traitement consistera à afficher tous les éléments d'un tableau de string A L'ENVERS (cad en partant de la fin) 
// suivis de leur taille et de leur index dans le tableau. Par exemple pour le tableau suivant const tab = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve'] 
// nous obtiendrons l'affichage suivant 3 fois (1 fois par loop):

// Eve, length: 3, index: 4
// Dan, length: 3, index: 3
// Charlie, length: 7, index: 2
// Bob, length: 3, index: 1
// Alice, length: 5, index: 0

const tab = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve']


for (j = tab.length-1; j>=0; j--) { 
  
  console.log(`${tab[j]}, length : ${tab[j].length} index : ${[j]}`) //affiche le tableau en index et la longueur de chacun
}



for (const elem of tab) {                               //elements du tab assigné a une variable
  elem.split('').reverse('')
  console.log(`${elem}, length: ${elem.length} index : ${[j]}`)        // affiche les elements et la longueur de chacun
}

tab.forEach((elem) => {                                 //methode forEach passé en fonction
  
console.log(`${elem}, length: ${elem.length} index : ${[j]}`)          // affiche les elements et la longueur de chacun
})

// dsl  reussi a return que la boucle for