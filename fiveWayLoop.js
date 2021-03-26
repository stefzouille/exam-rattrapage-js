
// Ecrire dans un même fichier ThreeWayLoop.js, 3 boucles différentes for, for-of, forEach qui effectueront le même traitement. 
// Ce traitement consistera à afficher tous les éléments d'un tableau de string A L'ENVERS (cad en partant de la fin) 
// suivis de leur taille et de leur index dans le tableau. Par exemple pour le tableau suivant const tab = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve'] 
// nous obtiendrons l'affichage suivant 3 fois (1 fois par loop):

// Eve, length: 3, index: 4
// Dan, length: 3, index: 3
// Charlie, length: 7, index: 2
// Bob, length: 3, index: 1
// Alice, length: 5, index: 0

const tab = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve']    //reussi que la 1er boucle inversé.................................


for (j = tab.length-1; j>=0; j--) { 
  console.log(`${tab[j]}, length : ${tab[j].length} index : ${[j]}`) //affiche le tableau en index et la longueur de chacun
}



for (const elem of tab) {                               //elements du tab assigné a une variable
  console.log(`${elem}, length: ${elem.length}`)        // affiche les elements et la longueur de chacun
}

tab.forEach((elem) => {                                 //methode forEach passé en fonction
  let ar1 = []
console.log(`${elem}, length: ${elem.length}`)          // affiche les elements et la longueur de chacun
})


let index = 0                                            //assigne 0 a la variable index
while (index < tab.length) {                             //tant que index plus petit que la longueur du tab
  console.log(`${tab[index]}, length: ${tab[index].length} index : ${[index]}`) //affiche le tableau et l index de chaque elem du tab
  ++index                                                //incremente de +1
}

index = 0
do {
  console.log(`${tab[index]}, length ${tab[index].length} index : ${[index]}`)
  ++index
} while (index < tab.length)