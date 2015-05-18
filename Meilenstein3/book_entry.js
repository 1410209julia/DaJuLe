//überprüft die Inputfelder auf Korrektheit
function pruefen(vorname, nachname, titel, autor, isbn, jahr, auflage, kapitel) {

    // Damit bei erneuter Prüfung die Felder nicht mehr rot sind
    document.getElementById(vorname.id).style.borderColor = "";
    document.getElementById(nachname.id).style.borderColor = "";
    document.getElementById(autor.id).style.borderColor = "";
    document.getElementById(isbn.id).style.borderColor="";
    document.getElementById(jahr.id).style.borderColor="";
    document.getElementById(auflage.id).style.borderColor="";

    falsch = false;

    pruefer = /^[a-zA-ZßäöüÄÖÜ]+$/;

    //Prüft übergebenen Vornamen auf Richtigkeit
    if(!pruefer.test(vorname.value)) {
       falsch = ueberpruefen(falsch,vorname);
    }

    //Prüft übergebenen Nachnamen auf Richtigkeit
    if(!pruefer.test(nachname.value)) {
        falsch = ueberpruefen(falsch,nachname);
    }

    //Prüft übergebenen Autor auf Richtigkeit
    if(!pruefer.test(autor.value)) {
        falsch = ueberpruefen(falsch, autor);
    }

    //Prüft übergebenen Titel auf Richtigkeit
    if(titel.value == "") {
        falsch = ueberpruefen(falsch, titel);
    }

    //Prüft übergebene ISBN auf Richtigkeit
    pruefer = /^[0-9]+$/;
    if(!pruefer.test(isbn.value) || isbn.value.length != 13) {
        falsch = ueberpruefen(falsch,isbn);
    }

    //Prüft übergebenes Datum auf Richtigkeit
    var aktuell = new Date().getFullYear();
    if(!pruefer.test(jahr.value) || jahr.value < 0 || jahr.value > aktuell) {
        falsch = ueberpruefen(falsch,jahr);
    }

    //Prüft übergebene Auflage auf Richtigkeit
    if(!pruefer.test(auflage.value) || auflage.value < 0) {
        falsch = ueberpruefen(falsch, auflage);
    }

    //Prüft übergebene Kapitel auf Richtigkeit
    if(!pruefer.test(kapitel.value) || kapitel.value < 0){
      falsch = ueberpruefen(falsch, kapitel);
    }

    return !falsch;
}

// Regelt die Fehlermeldung und färbt die Inputfelder rot
function ueberpruefen(fehler, name){
    if(fehler == false){
        alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
        name.focus();
    }
        document.getElementById(name.id).style.borderColor = "red";
    return true;
}