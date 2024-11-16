<?php
$servername = "localhost";
$username = "root";  
$password = "Johnray!&040514";  
$dbname = "course_finder_users";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
