var est24heure = true;

// Affiche la date du jour et l'heure
function currentTime() {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);

    if(!est24heure)
    {
     if (hour > 12) {
        hour = hour -12;
     }
    }

    // Date du jour momentanée
    let dateNow = date.getDay();
    let weekDay = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'][dateNow]
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    document.getElementById("clock").innerText = hour + " : " + min + " : " + sec; /* adding time to the div */
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

const agenda = document.querySelector('.calendar')
const date = document.querySelector('#date')

let affichageCalendar = true;
agenda.addEventListener('click', () => {
    date.classList.toggle('non-visible');
    affichageCalendar = !affichageCalendar;
    if(affichageCalendar){
        document.getElementById("affichageCalendar").innerHTML="Masquer la date";
    }
    else{
        document.getElementById ("affichageCalendar").innerHTML="Afficher la date";
    }
    
});

// NOTES : J'ai commenté cette partie, mais en gros tu peux utiliser un peu la même méthode que pour la date.
// Déclare la variable est24Heure en dehors de ta fonction pour que tu puisses l'utiliser partout dans ton script.
// Ensuite la fonction changeFormat et le addEventListener c'est bon. Ce qu'il resterait à faire, c'est dans ta fonction 
// currentTime, faire un traitement de l'heure selon la valeur de est24Heure qui est True ou False. 

let changeFormat = function () {
    est24heure = !est24heure;
    if(est24heure){
        document.getElementById("AfficherSur24h").innerHTML="Afficher Sur 12h";
    } 
    else{
        document.getElementById("AfficherSur24h").innerHTML="Afficher Sur 24h";
    }
};


