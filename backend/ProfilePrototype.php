<?php
class ProfilePrototype {
    public $id;
    public $name;
    public $email;
    public $age;

    public function __construct($name, $email, $age) {
        $this->name = $name;
        $this->email = $email;
        $this->age = $age;
    }

    // Clone method
    public function __clone() {
        $this->id = null; // Reset the ID for the cloned profile
    }
}
?>
