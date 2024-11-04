<?php
include 'ProfileHandler.php';

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$profileHandler = new ProfileHandler();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $action = $_GET['action'];
    $input = json_decode(file_get_contents("php://input"), true);

    if ($action === 'create') {
        $profileHandler->createProfile($input['name'], $input['email'], $input['age']);
        echo json_encode(["message" => "Profile created successfully"]);
    } elseif ($action === 'clone') {
        $profileHandler->cloneProfile($input['id']);
        echo json_encode(["message" => "Profile cloned successfully"]);
    }
}
?>
