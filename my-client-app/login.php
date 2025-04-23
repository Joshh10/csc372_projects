<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");


$data = json_decode(file_get_contents("php://input"));

$user = $data->user ?? '';
$pass = $data->pass ?? '';


$servername = "192.185.2.183";
$dbusername = "joshuala_josh";
$dbpassword = "Testcsc372@";
$dbname = "joshuala_react-login";

$conn = new mysqli($servername, $dbusername, $dbpassword, $dbname);


if ($conn->connect_error) {
    echo json_encode([["result" => "Database connection failed!"]]);
    exit;
}


$stmt = $conn->prepare("SELECT * FROM users WHERE username = ? AND password = ?");
$stmt->bind_param("ss", $user, $pass);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    echo json_encode([["result" => "Login successful!"]]);
} else {
    echo json_encode([["result" => "Invalid credentials."]]);
}

$stmt->close();
$conn->close();
?>
