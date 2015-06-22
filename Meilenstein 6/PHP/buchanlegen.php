<?php

$stringAusgabe = $_GET['autor'] . ", " . $_GET['titel'] . ", " . $_GET['kapitel'] . ", "
                . $_GET['art'] . ", " . $_GET['isbn'] . ", " . $_GET['jahr'] . ", "
	            . $_GET['auflage'] . ";" . "\n" . "\n";

$my_file = 'book.txt';
$handle = fopen($my_file, 'w') or die ('Cannot open file: '.$my_file);
fwrite($handle, $stringAusgabe);



?>