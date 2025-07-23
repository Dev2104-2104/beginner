let slideIndex = 1;

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let demos = document.getElementsByClassName("demo");

    if (n > slides.length) {
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = slides.length   //4
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }

    for (let i = 0; i < demos.length; i++) {
        demos[i].className = demos[i].className.replace(" active", "")
    }

    slides[slideIndex-1].style.display = "block";
    demos[slideIndex-1].className += " active";
}

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function openModal () {
    document.getElementById("myModal").style.display = "block" ;
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}