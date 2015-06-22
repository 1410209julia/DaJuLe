<?php
header('Content-Type: application/json');

    $json = $_GET["json"];

    if($json == 'horror'){
        $json_obj = file_get_contents('json/horror_books.json');
    }else {
        $json_obj = file_get_contents('json/roman_books.json');
    }
        $json_obj = utf8_decode($json_obj);
        echo $json_obj;

?>