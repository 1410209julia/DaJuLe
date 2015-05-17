function pruefen(vorname, nachname, titel, autor, isbn, jahr, auflage, kapitel) {

    document.getElementById(vorname.id).style.borderColor = "";
    document.getElementById(nachname.id).style.borderColor = "";
    document.getElementById(autor.id).style.borderColor = "";
    document.getElementById(isbn.id).style.borderColor="";
    document.getElementById(jahr.id).style.borderColor="";
    document.getElementById(auflage.id).style.borderColor="";

    falsch = false;

    pruefer = /^[a-zA-ZßäöüÄÖÜ]+$/;

    //test auf Vorname
    if(!pruefer.test(vorname.value)) {
        if(falsch == false){
            alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
            falsch = true;
        }
        document.getElementById(vorname.id).style.borderColor = "red";
    }

    //test auf Nachname
    if(!pruefer.test(nachname.value)) {
        if(falsch == false){
            alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
            falsch = true;
        }
        document.getElementById(nachname.id).style.borderColor = "red";
    }

    //test auf autor
    if(!pruefer.test(autor.value)) {
        if(falsch == false){
            alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
            falsch = true;
        }
        document.getElementById(autor.id).style.borderColor = "red";
    }

    //test auf Titel
    if(titel.value == "") {
        if(falsch == false){
            alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
            falsch = true;
        }
        document.getElementById(titel.id).style.borderColor = "red";
    }
    //test auf ISBN
    pruefer = /^[0-9]+$/;
    if(!pruefer.test(isbn.value) || isbn.value.length != 13) {
        if(falsch == false){
            alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
            falsch = true;
        }
        document.getElementById(isbn.id).style.borderColor = "red";
    }

    //test auf Jahr
    var aktuell = new Date().getFullYear();
    if(!pruefer.test(jahr.value) || jahr.value < 0 || jahr.value > aktuell) {
        if(falsch == false){
            alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
            falsch = true;
        }
        document.getElementById(jahr.id).style.borderColor = "red";
    }
    pruefer = /^[0-9]+$/;
    if(!pruefer.test(isbn.value)|| isbn.value.length != 13) {
        if(falsch == false){
            alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
            falsch = true;
        }

        document.getElementById(isbn.id).style.borderColor = "red";
    }

    //test auf Auflage
    if(!pruefer.test(auflage.value) || auflage.value < 0) {
        if(falsch == false){
            alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
            falsch = true;
        }

        document.getElementById(auflage.id).style.borderColor = "red";
    }
    //test auf Kapitel
    if(!pruefer.test(kapitel.value) || kapitel.value < 0){
        if(falsch == false){
            alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
            falsch = true;
        }
        document.getElementById(kapitel.id).style.borderColor = "red";
    }

    return !falsch;
}