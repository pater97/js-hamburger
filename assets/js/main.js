// DEFINIRE GLI ELEMENTI CHIAVE DELL'HAMBURGER MENU 
const hamburgerIcon = document.querySelector(".fa-bars")
const hamburgerMenu = document.querySelector(".hamburger-menu")
const closeIcon = document.querySelector(".fa-times")
// APERTURA AL CLICK DELL'ICONA HAMBURGER MENU
hamburgerIcon.addEventListener("click", function () {
    hamburgerMenu.style.display = "block"
});
// CHIUSURA AL CLICK DELL'ICONA DI CHIUSURA 
closeIcon.addEventListener("click", function () {
    hamburgerMenu.style.display = "none"
})