const muziek = new Audio ("muziek/game-muziek.mp3");

console.log("Scramble Game");
let peper_inside = document.getElementById('peper-inside');
let peperknop =  document.getElementById('peperknop');

peperknop.addEventListener("click", function(){
   
    if (!peper_inside.classList.contains('zichtbaar')) {
        peper_inside.classList.add('zichtbaar');
    } else {
        peper_inside.classList.remove('zichtbaar');
    }
});

let kaas_inside  = document.getElementById('kaas-inside');
let kaasknop =  document.getElementById('kaasknop');

kaasknop.addEventListener("click", function(){
    if (kaas_inside.classList.contains('zichtbaar')) {
        kaas_inside.classList.remove('zichtbaar');
    } else {
        kaas_inside.classList.add('zichtbaar');
    } 
});

let sla_inside  = document.getElementById('sla-inside');
let slaknop =  document.getElementById('slaknop');

slaknop.addEventListener("click", function(){
    if (sla_inside.classList.contains('zichtbaar')) {
        sla_inside.classList.remove('zichtbaar');
    } else {
        sla_inside.classList.add('zichtbaar');
    } 
});
let tomaat_inside  = document.getElementById('tomaat-inside');
let tomaatknop =  document.getElementById('tomaatknop');

tomaatknop.addEventListener("click", function(){
    if (tomaat_inside.classList.contains('zichtbaar')) {
        tomaat_inside.classList.remove('zichtbaar');
    } else {
        tomaat_inside.classList.add('zichtbaar');
    } 
//     tomaat_inside.classList.toggle("zichtbaar");
});

let klaarknop  = document.getElementById('klaarknop');
let confetie  = document.querySelector('.confetie');
klaarknop.addEventListener("click", function(){
    confetie.classList.toggle('zichtbaar');
    muziek.play();

});

let opnieuw  = document.getElementById('opnieuw');
opnieuw.addEventListener("click", function(){

    tomaat_inside.classList.remove('zichtbaar');
    sla_inside.classList.remove('zichtbaar');
    kaas_inside.classList.remove('zichtbaar');
    peper_inside.classList.remove('zichtbaar');
    confetie.classList.remove('zichtbaar');
    muziek.pause();
});