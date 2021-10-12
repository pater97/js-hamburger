//selezionare e definire l'hamburger menu 
// const hamburger = document.getElementsByClassName(`hamburger-menu`);
// const hamburgerIcon = document.getElementsByClassName(`fa-bars`)
// test
// console.log(hamburger, hamburgerIcon);
// cambiare visualizzazione al click 
const hamburgerIcon = document.querySelector(".fa-bars");
const nav = document.querySelector(".hamburger-menu");

hamburgerIcon.addEventListener("click", function () {
    if (nav.style.display === "block") {
        nav.style.display = "";
    } else {
        nav.style.display = "block";
    }
});
