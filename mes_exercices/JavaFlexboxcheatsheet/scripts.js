function GenererCube()
{
    // Récupération des valeurs et de la div où on va dessiner les cubes
    let nbCubes = document.getElementById("input_number").value;
    let valeurJustify = document.getElementById("select_valeur").value;
    let resultat = document.getElementById("resultat");

    // Supprimer les cubes du résultat
    let listeCubes = document.querySelectorAll("#resultat *"); // Le * sélectionne tout ce qu'il y a dans l'id résultat
    listeCubes.forEach(cube => {cube.remove() }); //Tableau (listeCubes) / boucle (forEach)


    //Créer mes cubes
    for (let i =1; i <= nbCubes; i++)
    {
        cube = document.createElement("div");
        cube.classList.add("cube");
        cube.innerHTML = i;
        resultat.append(cube);
    }

    // Modifier la valeur de justify-content de la dic resultat
    resultat.style.justifyContent = valeurJustify;
}
