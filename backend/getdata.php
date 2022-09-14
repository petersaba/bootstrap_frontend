<?php 
    header("Access-Control-Allow-Origin: *");
    header("Access-Contraol-Allow-Headers: *");
    include_once("connection.php");


    $query = $mysqli->prepare("SELECT * FROM messages");
    $query->execute();
    $data = $query->get_result();

    $response = [];

    while($value = $data->fetch_assoc()){
        $response[] = $value;
    }

    echo json_encode($response);
?>