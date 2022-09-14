<?php 
    header("Access-Control-Allow-Headers: *");
    header("Access-Contraol-Allow-Origin: *");
    include_once("connection.php");

    $full_name = $_POST['full_name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    $query = $mysqli->prepare("INSERT INTO messages(full_name, email, phone, message) VALUES(?, ?, ?, ?)");
    $query->bind_param("ssss", $full_name, $email, $phone, $message);
    $query->execute();

    $response["success"] =  TRUE;
    echo json_encode($response);
?>