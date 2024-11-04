<?php
include 'db_connection.php';
include 'ProfilePrototype.php';

class ProfileHandler {
    private $conn;

    public function __construct() {
        $this->conn = Database::connect();
    }

    // Create a new profile
    public function createProfile($name, $email, $age) {
        $profile = new ProfilePrototype($name, $email, $age);
        // Insert into DB
        $stmt = $this->conn->prepare("INSERT INTO profiles (name, email, age) VALUES (?, ?, ?)");
        $stmt->bind_param("ssi", $profile->name, $profile->email, $profile->age);
        $stmt->execute();
    }

    // Clone a profile
    public function cloneProfile($id) {
        // Retrieve the original profile
        $stmt = $this->conn->prepare("SELECT name, email, age FROM profiles WHERE id = ?");
        $stmt->bind_param("i", $id);
        $stmt->execute();
        $stmt->bind_result($name, $email, $age);
        $stmt->fetch();

        // Clone it
        $original = new ProfilePrototype($name, $email, $age);
        $clone = clone $original;

        // Insert the cloned profile into the database
        $stmt = $this->conn->prepare("INSERT INTO profiles (name, email, age) VALUES (?, ?, ?)");
        $stmt->bind_param("ssi", $clone->name, $clone->email, $clone->age);
        $stmt->execute();
    }
}
?>
