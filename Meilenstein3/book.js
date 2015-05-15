/**
 * Blendet die Tabelle mit den gelisteten Horrorbuechern ein.
 * Blendet die Tabelle mit den gelisteten Romanbuechern aus.
 * Die Tabfarbe des Horror-Tabs wird auf den Standardwert von #3F48CC gesetzt.
 * Die Tabfarbe des Roman-Tabs wird auf den Wert blue gesetzt.
 */
function anzeige_Horror() {

    document.getElementById('tab_horror').style.display="";
    document.getElementById('horror').style.backgroundColor="rgb(63,72,204)";
    document.getElementById('tab_roman').style.display="none";
    document.getElementById('roman').style.backgroundColor="rgb(0,162,232)";
}

/**
 * Blendet die Tabelle mit den gelisteten Romanbuechern ein.
 * Blendet die Tabelle mit den gelisteten Horrorbuechern aus.
 * Die Tabfarbe des Roman-Tabs wird auf den Standardwert von #3F48CC gesetzt.
 * Die Tabfarbe des Horror-Tabs wird auf den Wert blue gesetzt.
 */
function anzeige_Roman() {
    document.getElementById('tab_horror').style.display="none";
    document.getElementById('horror').style.backgroundColor="rgb(0,162,232)";
    document.getElementById('tab_roman').style.display="";
    document.getElementById('roman').style.backgroundColor="rgb(63,72,204)";
}

/**
 * Die Tabelle mit dem jeweiligen JSON Objekt wird angelegt.
 * Abhängig vom uebergebnenen JSON book object (aktuell moeglich: Roman, Horror)
 */
function load(json_object) {
    var i = 0;
    document.writeln("<table><tr>");
    document.writeln("<th>Autor</th><th>Titel</th><th>Kapitel</th><th>Art des Buches</th><th>ISBN</th><th>Erscheinungsjahr</th><th>Auflage</th></tr>");

    for(i=0;i<json_object.bookdata.length;i++)
    {
        document.writeln("<tr><td>"+ json_object.bookdata[i].autor+"</td><td>"+ json_object.bookdata[i].titel+"</td>");
        document.writeln("<td>"+ json_object.bookdata[i].kapitel+"</td><td>"+ json_object.bookdata[i].buchart+"</td>");
        document.writeln("<td>"+ json_object.bookdata[i].ISBN+"</td><td>"+ json_object.bookdata[i].erscheinungsjahr+"</td>");
        document.writeln("<td>"+ json_object.bookdata[i].auflage+"</td></tr>");
    }
    document.writeln("</table>");
}