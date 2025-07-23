let acc = document.getElementsByClassName("accordion")
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");

        let panel = this.nextElementSibling
        console.log(panel);
        // if (panel.style.display === "block") {
        //     panel.style.display = "none";
        // } else {
        //     panel.style.display = "block";
        // }

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    })
}