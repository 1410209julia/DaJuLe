function pruefen(form, vorname, nachname, titel, autor, isbn, jahr, auflage) {
    /*
     * Bei einer weiteren Syntaxpruefung werden alle zuvor rot markierten Felder
     * auf den Initialzustand zurueck gesetzt.
     */

    var falsch = false;

    document.getElementById(vorname.id).style.borderColor = "";
    document.getElementById(nachname.id).style.borderColor = "";
    document.getElementById(autor.id).style.borderColor = "";
    document.getElementById(isbn.id).style.borderColor="";
    document.getElementById(jahr.id).style.borderColor="";
    document.getElementById(auflage.id).style.borderColor="";


    pruefer = /^[\sa-zA-ZßäöüÄÖÜ]+$/; //Ueberpueft den angegebenen Vornamen auf korrekte Syntax
    if(!pruefer.test(vorname.value)) {
        if(falsch == false){
            alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
            falsch = true;
        }
        document.getElementById(vorname.id).style.borderColor = "red";

    }

    if(!pruefer.test(nachname.value)) { //Ueberpueft den angegebenen Nachnamen auf korrekte Syntax
        if(falsch == false){
            alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
            falsch = true;
        }
        document.getElementById(nachname.id).style.borderColor = "red";

    }

    if(!pruefer.test(autor.value)) { //Ueberpueft den angegebenen Autor auf korrekte Syntax
        if(falsch == false){
            alert("Einige Eingaben sind fehlerhaft. Bitte %FCberpr%FCfen Sie ihre Eingaben");
            falsch = true;
        }
        document.getElementById(autor.id).style.borderColor = "red";

    }

    if(titel.value == "") { //Ueberpueft den angegebenen Titel auf korrekte Syntax
        if(falsch == false){
            alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
            falsch = true;
        }

        document.getElementById(titel.id).style.borderColor = "red";
    }

    pruefer = /^[0-9]+$/;
    if((!regex.test(isbn.value)) || (isbn.value.length > 13)) { //Ueberpueft die angegebene ISBN auf korrekte Syntax
        if(falsch == false){
            alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
            falsch = true;
        }

        document.getElementById(isbn.id).style.borderColor = "red";
    }

    aktuell = new Date().getFullYear();  //speichert das Jahr in einer Variable
    if((!pruefer.test(jahr.value)) || jahr.value<0 || jahr.value > aktuell) { //Ueberprueft das angegebene Jahr auf korrekte Syntax
        if(fehler == false){
            alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
            falsch = true;

        }
        document.getElementById(jahr.id).style.borderColor = "red";
    }

    if(!pruefer.test(auflage.value) || auflage.value < 0) { //Ueberprueft, ob die Auflage den Syntaxregeln entspricht
        if(falsch == false){
            alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
            falsch = true;
        }

        document.getElementById(auflage.id).style.borderColor = "red";
    }

    return !falsch;
}