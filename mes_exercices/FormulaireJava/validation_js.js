
function EstVide(valeur)
{
    return valeur === "" ? true : false;
}

function EstValideCourriel(valeur)
{
    const expression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return expression.test(valeur);
}

function AfficherMessage(element, message = '')
{
    const zoneMessage = element.parentElement.querySelector('small');
    zoneMessage.textContent = message;
}

function ValidationOnSubmit()
{
    let formValide = true;
    const userCourriel = document.getElementById('user_courriel');
    const userCourrielConfirmation = document.getElementById('user_courriel_confirmation');
    AfficherMessage(userCourriel);
    AfficherMessage(userCourrielConfirmation);
    if (EstVide(userCourriel.value)) 
    {
        AfficherMessage(userCourriel, "Le courriel ne peut être vide.");
        formValide = false;
    } 
    if (!EstValideCourriel(userCourriel.value)) 
    {
        AfficherMessage(userCourriel, "Le courriel est invalide.");
        formValide = false;
    } 
    if (EstVide(userCourrielConfirmation.value)) {
        AfficherMessage(userCourrielConfirmation, "Le courriel ne peut être vide.");
        formValide = false;
    } 
    if (!EstValideCourriel(userCourrielConfirmation.value)) {
        AfficherMessage(userCourrielConfirmation, "Le courriel est invalide.");
        formValide = false;
    } 
    if (userCourriel.value != userCourrielConfirmation.value) {
        AfficherMessage(userCourrielConfirmation, "Les deux courriels ne correspondent pas.");
        formValide = false;
    } 
    return formValide;
}

function EstValidePassword(valeur)
{
    return valeur.length >6 ? true : false;
}

const formPreventDefault = document.getElementById('form_prevent_default');
formPreventDefault.addEventListener('submit', ValidationPreventDefault);

function ValidationPreventDefault(e)
{
    e.preventDefault();

    let formValide = true;
    const userName = document.getElementById('user_name');
    const userPassword = document.getElementById('user_password');
    AfficherMessage(userName);
    AfficherMessage(userPassword);

    if (EstVide(userName.value)) 
    {
        AfficherMessage(userName, "Le champ nom de peut être vide.");
        formValide = false;
    } 

    if (EstVide(userPassword.value)) {
        AfficherMessage(userPassword, "Vous devez entrer un mot de pass.");
        formValide = false;
    } 
    if (!EstValidePassword(userPassword.value)) {
        AfficherMessage(userPassword, "Le mot de passe doit contenir plus de 6 caractères.");
        formValide = false;
    } 
    if (formValide)

    formPreventDefault.submit();
    return formValide;
}