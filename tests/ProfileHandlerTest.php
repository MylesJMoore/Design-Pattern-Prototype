<?php
use PHPUnit\Framework\TestCase;
include 'ProfileHandler.php';

class ProfileHandlerTest extends TestCase {
    private $handler;

    protected function setUp(): void {
        $this->handler = new ProfileHandler();
    }

    public function testCreateProfile() {
        // Test if profile is created without errors
        $this->handler->createProfile('Jane Doe', 'jane@example.com', 28);
        $this->assertTrue(true); // If no exceptions, test passed
    }

    public function testCloneProfile() {
        // Test if cloning works without errors
        $this->handler->cloneProfile(1); // Assuming profile with ID 1 exists
        $this->assertTrue(true); // If no exceptions, test passed
    }
}
?>
