<?php
session_start();

function getUserData() {
    $url = 'https://jsonplaceholder.typicode.com/users';
    $json = file_get_contents($url);
    return json_decode($json, true);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password']; // assuming password is the zip code

    $users = getUserData();
    $loggedIn = false;

    foreach ($users as $user) {
        if (($user['username'] === $username || $user['email'] === $username) && $user['address']['zipcode'] === $password) {
            $_SESSION['user'] = ['username' => $username];
            $loggedIn = true;
            break;
        }
    }

    if ($loggedIn) {
    header("Location: index.php"); // Redirect to homepage or dashboard
    exit;
    } else {
    $_SESSION['error'] = 'Invalid username or password'; // Set an error message
    header("Location: index.php");
    exit;
    }
}
?>
