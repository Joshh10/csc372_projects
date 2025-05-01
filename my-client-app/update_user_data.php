<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$data = json_decode(file_get_contents("php://input"));
$user = $data->user ?? '';
$bio = $data->bio ?? '';
$color = $data->color_preference ?? '';

$servername = "192.185.2.183";
$dbusername = "joshuala_josh";
$dbpassword = "Testcsc372@";
$dbname = "joshuala_react-login";

$conn = new mysqli($servername, $dbusername, $dbpassword, $dbname);

if ($conn->connect_error) {
    echo json_encode(["message" => "Connection failed"]);
    exit;
}


$stmt = $conn->prepare("SELECT id FROM users WHERE username = ?");
$stmt->bind_param("s", $user);
$stmt->execute();
$result = $stmt->get_result();
$user_id = $result->fetch_assoc()['id'] ?? null;

if (!$user_id) {
    echo json_encode(["message" => "User not found"]);
    exit;
}


$check = $conn->prepare("SELECT id FROM user_data WHERE user_id = ?");
$check->bind_param("i", $user_id);
$check->execute();
$exists = $check->get_result()->num_rows > 0;

if ($exists) {
    $stmt = $conn->prepare("UPDATE user_data SET bio = ?, color_preference = ? WHERE user_id = ?");
    $stmt->bind_param("ssi", $bio, $color, $user_id);
} else {
   
    $stmt = $conn->prepare("INSERT INTO user_data (user_id, bio, color_preference) VALUES (?, ?, ?)");
    $stmt->bind_param("iss", $user_id, $bio, $color);
}

if ($stmt->execute()) {
    echo json_encode(["message" => "Profile updated"]);
} else {
    echo json_encode(["message" => "Update failed"]);
}

$stmt->close();
$conn->close();
?>
