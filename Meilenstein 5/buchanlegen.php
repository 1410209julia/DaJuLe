<?php

$stringAusgabe = $_POST['autor'] . ", " . $_POST['titel'] . ", " . $_POST['kapitel'] . ", "
                . $_POST['art'] . ", " . $_POST['isbn'] . ", " . $_POST['jahr'] . ", "
	            . $_POST['auflage'] . ";" . "\n" . "\n";

$my_file = 'book.txt';
$handle = fopen($my_file, 'w') or die ('Cannot open file: '.$my_file);
fwrite($handle, $stringAusgabe);
print $stringAusgabe;
?>