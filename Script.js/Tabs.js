function openCity(evt, cityName) {

    let tablinks = document.getElementsByClassName("tablinks");
    let tabcontent = document.getElementsByClassName("tabcontent");
    let i;

    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    for (i = 0; i < tablinks.length; i++ ) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}       