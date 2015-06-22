
window.onload = function () {
    jsonAnzeigen('horror');
};

function anzeige_Horror() {
    document.getElementById('horror').style.backgroundColor="rgb(63,72,204)";
    document.getElementById('roman').style.backgroundColor="rgb(0,162,232)";
    jsonAnzeigen('horror')
}

function anzeige_Roman() {
    document.getElementById('horror').style.backgroundColor="rgb(0,162,232)";
    document.getElementById('roman').style.backgroundColor="rgb(63,72,204)";
    jsonAnzeigen('roman')
}

function jsonAnzeigen(genre){

    if (window.XMLHttpRequest) {
        anfrage = new XMLHttpRequest();
    } else {  // old browser compatibility (IE5, IE6)
        anfrage = new ActiveXObject("Microsoft.XMLHTTP");
    }
    anfrage.onreadystatechange=function() {
        if (anfrage.readyState==4 && anfrage.status==200) {
            var jsonString = anfrage.responseText;
            var jsonData = JSON.parse(jsonString);
            laden(jsonData);
            document.getElementById("tab").innerHTML=tabelle;
        }
    }

    anfrage.open("GET", "getBooks.php?json="+genre, true);
    anfrage.send();
}

function laden(json_object) {
    tabelle ="<table>" +
    "<tr>" +
    "<th>Autor</th>" +
    "<th>Titel</th>" +
    "<th>Kapitel</th>" +
    "<th>Art des Buches</th>" +
    "<th>ISBN</th>" +
    "<th>Erscheinungsjahr</th>" +
    "<th>Auflage</th>" +
    "</tr>";

    for(i=0;i<json_object.bookdata.length;i++) {
        tabelle += "<tr>" +
        "<td>"+ json_object.bookdata[i].autor+"</td>" +
        "<td>"+ json_object.bookdata[i].titel+"</td>"+
        "<td>"+ json_object.bookdata[i].kapitel+"</td>" +
        "<td>"+ json_object.bookdata[i].art+"</td>" +
        "<td>"+ json_object.bookdata[i].isbn+"</td>" +
        "<td>"+ json_object.bookdata[i].jahr+"</td>" +
        "<td>"+ json_object.bookdata[i].auflage+"</td>" +
        "</tr>";
    }
    tabelle += "</table>";
}