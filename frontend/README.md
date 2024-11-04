# Prototype Pattern Project
## Overview
This project demonstrates the Prototype Pattern in PHP. The Prototype Pattern is a creational design pattern that allows for creating new objects by copying an existing instance (prototype) instead of creating new instances from scratch. It is useful when the object creation process is resource-intensive or when you need to maintain certain properties of the prototype in the clone.

In this example, we built a profile management app where users can create profiles and clone them easily using the Prototype Pattern.

## Stack
Frontend: React
Backend: PHP (powered by XAMPP)
Database: MySQL (optional but used in this example)
CSS: Custom styling
Testing: Jest (for React) and PHPUnit (for PHP)
Bonus: Python integration to interact with the backend API

## Setup Instructions
### Prerequisites
XAMPP: Install and run XAMPP for Apache and MySQL.
Node.js & npm: For React frontend.
Python (optional): For running the Python script.

### Backend Setup
Start XAMPP and ensure Apache and MySQL are running.
Navigate to the backend folder.
Create the database by running the following SQL script in MySQL:
CREATE DATABASE prototype_pattern_db;
USE prototype_pattern_db;
CREATE TABLE profiles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(50),
    age INT
);
Run PHP in XAMPP to host the backend (ensure files are in the htdocs folder or configure accordingly).

### Frontend Setup
Navigate to the frontend folder.
Install dependencies:
npm install

Start the React app:
npm start

Python Setup (Optional)
Install the requests library:
pip install requests
Run the Python script for creating or cloning profiles:
python profile_manager.py

## Usage
### Creating a Profile
Fill in the "Name," "Email," and "Age" fields in the React app.
Click on "Create Profile."
The profile will be created and saved in the database.

### Cloning a Profile
Enter the ID of an existing profile in the "Profile ID" field in the React app.
Click on "Clone Profile."
A clone of the specified profile will be created in the database.

## Testing
### Running Frontend Tests
To test the React app, run:
npm test

### Running Backend Tests
To test PHP functions, navigate to the backend folder and run:
phpunit tests/ProfileHandlerTest.php