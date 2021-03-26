// Lisez cet exercice entièrement avant de commencer.
// Ecrire une fonction information qui prend 4 paramètres:

// un prénom qui sera une string
// un nom qui sera une string
// un âge qui sera un number
// une sexe qui sera une string parmi M, F, ?
// Cette fonction devra afficher le message suivant en fonction des paramètres:

const information = (prenom, nom, age, sexe) => {
  console.log(`Prenom : ${prenom}`)
  console.log(`Nom : ${nom}`)
  console.log(`Age : ${age}`)
  //console.log(`Sexe : ${sexe}`)
  if (age >= 18 && sexe === 'M') {                                  //si age plus grand ou egal a 18   
    console.log('Monsieur, vous êtes majeur depuis 21 ans')   //affiche  le resultat
  } else if (age < 18 && sexe === 'F' )  {                                          //sinon
    console.log('Madame vous serez majeur dans 11 ans')    //affiche ce resultat
  } else {
    console.log('vous serez majeur dans 11 ans')
  }

  
}




information('Sofiane', 'Akermoun', 39, 'M')
information('Alice', 'Liddell', 7, 'F')
information('Valerie', 'Dupont', 7, '?')