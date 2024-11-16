<?php
require 'config.php';

session_start();

if (isset($_SESSION['username'])) {
    $username = $_SESSION['username'];
    // Fetch user details from the database
    $sql = "SELECT email FROM users WHERE username='$username'";
    $result = $conn->query($sql);
    
    if ($result->num_rows == 1) {
        $user = $result->fetch_assoc();
        $email = $user['email'];
        // Echo username and email as JavaScript variables
        echo "<script>";
        echo "var username = '$username';";
        echo "var email = '$email';";
        echo "</script>";
    }
}

$conn->close();
?>