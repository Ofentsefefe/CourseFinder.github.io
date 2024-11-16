<?php
// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Get form data
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $confirm_password = $_POST['confirm_password'];
    
    // Validate that passwords match
    if ($password === $confirm_password) {
        // Hash the password for security
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);
        
        // Data to write to the file
        $user_data = "Username: " . $username . "\nEmail: " . $email . "\nPassword: " . $hashed_password . "\n\n";

        // Append data to users.txt file
        $file = 'users.txt'; // You can also change this to a different file format, like .csv
        file_put_contents($file, $user_data, FILE_APPEND | LOCK_EX);

        // Success message
        echo "Registration successful!";

    } else {
        // Passwords do not ♦
        echo "Passwords do not match!";
    }
} else {
    // If form is not submitted
    echo "Invalid request!";
}
?>
