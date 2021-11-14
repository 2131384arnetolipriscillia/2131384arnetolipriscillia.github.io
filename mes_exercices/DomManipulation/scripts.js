function ajouterTitre(monTexte, id) {


let titre = document.createElement("h1"); // Equivaut a une balise <h1> dans le html
titre.innerHTML = monTexte; // Va apparaître sur la page
titre.classList.add("titre") // Rajouter une classe titre qu'on peut modifier en css
titre.setAttribute("id", id);
titre.style.color = "red"; // definir la couleur du titre sans passer par css

let addContainer = document.getElementById("add_container");
addContainer.append(titre); // ajoute le container dans le div
}

function Supprimer() // monelement.remove()
{
let titre1 = document.getElementById("titre1");
titre1.remove();
}

ajouterTitre("Bonjour !", "titre1");
ajouterTitre("Bonjour une 2eme fois", "titre2");
