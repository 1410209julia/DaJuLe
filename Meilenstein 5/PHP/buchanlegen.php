<?php


    $autor = $_GET['autor']; 
    $titel = $_GET['titel'];
    $kapitel = $_GET['kapitel']." Kapitel";
    $art = $_GET['art'];
    $isbn = $_GET['isbn'];
    $jahr = $_GET['jahr'];
    $auflage = $_GET['auflage'].". Auflage";

$stringAusgabe = $autor . ", " . $titel . ", " . $kapitel . ", " . $art
	          . ", " . $isbn . ", " . $jahr . ", "
	          . $auflage . ";" . "\n" . "\n";

$my_file = 'book.txt';
$handle = fopen(php/$my_file, 'w') or die ('Cannot open file: '.$my_file);
fwrite($handle, $stringAusgabe);

?>