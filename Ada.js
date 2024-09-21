const prenom = "Soumeya"
//J'injecte le contenu de ma variable prenom dans la balise h2//

document.querySelector('h2').innerHTML = prenom
//J'injecte le contenu de la variable age dans la balise h3//
//Mon age peut changer//

console.log("Je suis dans l'inspecteur de la page")
document.querySelector('h3').innerHTML = age
let age = 30
age = age + 1

let bool = false