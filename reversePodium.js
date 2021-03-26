// Ecrire une fonction reversePodium qui prend comme paramètre un tableau de number 
// et affiche les 3 plus mauvaises notes tel que ci dessous

// 2
// 1
// 0

const podium = (tab) => {                       //parametre tab passé a la fonction podium
  let top3 = tab                                //j assigne tab a la variable top3
  .sort((b, a) => {                             // .sort trier un tableau 
    return b - a                                //renvoi b - a
  })
    .slice(0, 3)                                //coupe le 1er et 3em index
  console.log(top3[0])                 //affiche l index [x] de top3
  console.log(top3[1])
  console.log(top3[2])
}

let scores = [1, 10, 56, 9, 45, 0, 11, 4]
podium(scores)     