<?php

header('Content-Type: application/json');
$json= $_GET["json"];

$connection = new MySQLi( "localhost", "root", "", "mybooks" );
$connection->set_charset ( "utf8" );


if ($json == 'horror') {
    $ausdruck = "SELECT autor,titel, kapitel, art, isbn, jahr, auflage FROM t_buecher WHERE genre = 'horror'";
}
else if($json == 'roman'){
    $ausdruck = "SELECT autor,titel, kapitel, art, isbn, jahr, auflage FROM t_buecher WHERE genre = 'romanze'";
} else{
    echo("Falsches Genre übergeben");
}
$ergebnis = mysqli_query($connection, $ausdruck);

while($reihe = mysqli_fetch_assoc($ergebnis)) {
    $ausgabe[] = $reihe;
}
$ausgabeEncode = json_encode(array_values($ausgabe));

$jsonDatei = '{ "bookdata": '.$ausgabeEncode.'}';

echo $jsonDatei;
$connection->close();
?>