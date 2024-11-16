<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
    <link rel="stylesheet" type="text/css" href="styleX.css">
</head>
<body>
    <div class="container">
        <h1>Login</h1>
        <?php
require 'config.php';
$invalid = "invalid";
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Prepare a statement to prevent SQL injection
    $stmt = $conn->prepare("SELECT * FROM users WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    $query2 = "SELECT * FROM users ORDER BY id DESC LIMIT 1";
    $query3 = "SELECT * FROM users";
    $result2 = $conn->query($query2);
    $result3 = $conn->query($query3);

    $query_review = "SELECT * FROM review";
    $result_review = $conn->query($query_review);

    // Check if the username exists
    if ($result->num_rows == 1) {
        $user = $result->fetch_assoc();
        // while ($row = mysqli_fetch_assoc($result2)){
        //     $_SESSION['id'] = $row["id"] ;;
        // }
        // Verify the password
        if (password_verify($password, $user['password'])) {
            // Start a new session and set session variables
            session_start();
//             $rating = "";
//             $reviews = "";
// while ($row = mysqli_fetch_assoc($result_review)) {
//     $formatted_date = substr($row['created_at'], 0, 10);
//     $rating .= "
//     <tr>
//         <td>
//             <p>" . htmlspecialchars($row['username']) . "</p>
//         </td>
//         <td>" .  htmlspecialchars($formatted_date) . "</td>
//         <td><span class=\"status process\">" . htmlspecialchars($row['stars']) . " stars</span></td>
//     </tr>";
//     $reviews .= "
//     <ul class=\"todo-list\">
//         <li class=\"completed\">
//             <p>" . htmlspecialchars($row['reviews']) . "</p>
//             <!-- <i class='bx bx-dots-vertical-rounded'></i> -->
//         </li>
//     </ul>
// ";

// }           $num = 0;
//             while ($row = mysqli_fetch_assoc($result3)){
//                 $num += 1;
//                 $_SESSION["number"] = $num;
//             }
             // Set email from the database
            // Redirect to the homepage
            
            $_SESSION['username'] = $username;
            $_SESSION['email'] = $user['email'];
            $_SESSION["ratings"] = $rating;
            $_SESSION["reviews"] = $reviews;
            header('Location: home.php');
            exit();
        } else {
            echo "<p class = $invalid >Invalid password or username. Please try again.</p>";
        }
    } else {
        echo "<p class = $invalid>Invalid password or username. Please try again.<p>";
    }

    $stmt->close();
}

$conn->close();
?>
        <form action="login.php" method="post">
            <label for="username">Username</label>
            <input type="text" id="username" name="username" required>
            
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required>
            
            <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <a href="register.php">Register here</a>.</p>
    </div>
   
</body>
</html>