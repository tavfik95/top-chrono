/* Afficher l'heure et la date*/
let dateLocal = document.getElementById('date')
let today = new Date();
let option ={
    weekday : "long",
    year : "numeric",
    month : "numeric",
    day : "numeric",
    hour :"numeric",
    minute :"numeric",   
}


// function affichZero(nombre) {
//     // cette fonction prend en paramètre un nombre
//     // si ce nombre est inférieur à 10, on affiche 0 + ce nombre
//     // Ex: il est 07h00
//     return nombre < 10 ? '0' + nombre : nombre;
const date = new Date();
const jours =["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
const mois = ["Janvier","Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
let h=date.getHours();
if(h<10){
    h="0"+h;
}
let m=date.getMinutes()
if(m<10){
    m="0"+m;
}
dateLocal.innerHTML =`Bienvenue, aujourd'hui nous sommes le ${jours[date.getDay()]} ${date.getDate()} ${mois[date.getMonth()]} ${date.getFullYear()}, et il est ${h} : ${m}.`;
