<?php
    try{
        $host = "localhost";
        $username = "root";
        $password = null;
        $dbname = "bootstrapdb";
        
        $mysqli = new mysqli($host, $username, $password, $dbname);
        $success =TRUE;
        echo $succes;
    }catch(Exception $e){
        $success = FALSE;
        echo $succes;
    }
?>