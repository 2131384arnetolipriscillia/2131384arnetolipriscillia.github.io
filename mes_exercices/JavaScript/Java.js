// alert('Bonjour depuis un fichier externe');
// console.log("Message à la console");
// alert(message)
// message = "Et aussi le saucisson";
// alert(message)
let titre = document.getElementById('idTitre');
titre.style.color = 'turquoise';

let message = "Bonjour, quel est ton nom?";
let nom = prompt(message);
alert('Bonjour ' + nom + ' Bienvenue');
let resultat = confirm("Voulez-vous continuer?");
if (resultat) {
    alert('Ok on continue.');
}
else {
    alert('Ok, on arrête déjà.');
}
// function getSatisfaction() {
//     let textConfirm = "Est-ce que c'est assez pour aujourd'hui?";
//     let resultat = confirm(textConfirm);

//     if (resultat) {
//         alert('Ok ' + nom + ' on arrête.');
//     }
//     else {
//         alert('Parfait on peut continuer ' + nom)
//     }
function getNom() {
    let textePrompt = 'veuillez-entrer votre nom';
    let nom = prompt(textePrompt);

    let titre = document.getElementById('idTitre');
    titre.innerHTML= 'Bonjour ' + nom;
}





