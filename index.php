<?php
// Start the session
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Head contents (Include Bootstrap CSS) -->
</head>
<body>
    <div class="container">
        <div class="row">
            <!-- Account Details or Login/Create Form -->
            <div class="col-md-4">
                <?php include 'partials/account.php'; ?>
            </div>

            <!-- Feed -->
            <div class="col-md-4">
                <?php include 'partials/feed.php'; ?>
            </div>

            <!-- Users and Follow Functionality -->
            <div class="col-md-4">
                <?php include 'partials/users.php'; ?>
            </div>
        </div>
    </div>
</body>
</html>
