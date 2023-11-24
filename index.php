<?php
// Start the session
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Latest compiled and minified CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- Latest compiled JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body>
    <div class="container">
        <div class="row">
            <!-- Account Details or Login/Create Form -->
            <div class="col-md-4">
                Account
                <?php include 'partials/account.php'; ?>
            </div>

            <!-- Feed -->
            <div class="col-md-4">
                Feed
                <?php include 'partials/feed.php'; ?>
            </div>

            <!-- Users and Follow Functionality -->
            <div class="col-md-4">
                Users
                <?php include 'partials/users.php'; ?>
            </div>
        </div>
    </div>
</body>
</html>
