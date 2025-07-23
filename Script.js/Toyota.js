const myMenuIcon = document.getElementById("myMenuIcon");
const megaMenu = document.getElementById("megaMenu");
const ClosemegaMenu = document.getElementById("ClosemegaMenu");

myMenuIcon.addEventListener("click", (e) => {

    e.preventDefault();
    // console.log("Clicked!");

    megaMenu.style.display = "block";
});

ClosemegaMenu.addEventListener("click", (e) => {

    e.preventDefault();
    megaMenu.style.display = "none";

});