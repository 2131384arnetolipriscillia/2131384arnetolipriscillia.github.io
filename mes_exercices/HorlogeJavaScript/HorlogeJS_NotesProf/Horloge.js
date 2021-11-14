function currentTime() {
    
    // Récupérer la date et l'heure actuelle dans une variable
    let date = new Date();
    
    // Horloge momentanée en 12h
    
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);

    // NOTES : Faire le traitement ici selon la valeur de est24Heure

    document.getElementById("clock").innerText = hour + " : " + min + " : " + sec; /* adding time to the div */

    // Date du jour momentanée
    let weekDay = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'][new Date().getDay()]
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

   
    document.getElementById("date").innerText = weekDay + " - " + day + " - " + month + " - " + year;
    
    let t = setTimeout(function () { currentTime() }, 1000); /* setting timer */
}

function updateTime(k) {
    if (k < 10) {
        return "0" + k;
    }
    else {
        return k;
    }
    
}

currentTime();

// NOTES : Ici agenda est une classe, tu dois utiliser .calendar
const agenda = document.querySelector('.calendar'); // MODIFICATION : #calendar pour .calendar
const date = document.querySelector('#date')

agenda.addEventListener('click', () => {
    // NOTES : C'est une bonne façon de faire, ensuite dans ton css fait une règle pour la classe
    //         non-visible qui masquera ta div qui affiche la date.
    date.classList.toggle('non-visible');
});

// NOTES : J'ai commenté cette partie, mais en gros tu peux utiliser un peu la même méthode que pour la date.
// Déclare la variable est24Heure en dehors de ta fonction pour que tu puisses l'utiliser partout dans ton script.
// Ensuite la fonction changeFormat et le addEventListener c'est bon. Ce qu'il resterait à faire, c'est dans ta fonction 
// currentTime, faire un traitement de l'heure selon la valeur de est24Heure qui est True ou False. 

// let changeFormat = function() {
//     est24heure = !est24heure;
// };

// changeHeure.addEventListener("click", changeFormat);

// NOTES : ici c'est pas utile car tu utilise setTimeout dans ta fonction 
//         currentTime(). Tu aurais pu l'utiliser comme ça au lieu de setTimeout
//         setIntervat(currentTime, 1000);
// window.setInterval(AfficherDate, 100);

