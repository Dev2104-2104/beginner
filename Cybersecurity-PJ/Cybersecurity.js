let html = document.getElementsByTagName('html')[0];
let radios = document.getElementsByName('themes');

for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener('change', function (){
        html.className = '';
        html.classList.add(this.id);
    });
}

let acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}