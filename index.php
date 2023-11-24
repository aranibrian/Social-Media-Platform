<?php
// Start the session
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Social Media Platform</title>
    <!-- Latest compiled and minified CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="css/style.css">

    <!-- jQuery library -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

    <!-- Latest compiled JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>

    <!-- Custom Script -->
    <script src="js/script.js"></script>
</head>
<body>
    <div class="container">
        <!-- Display error message -->
        <?php if (isset($_SESSION['error'])): ?>
            <div class="alert alert-danger" role="alert">
                <?php echo $_SESSION['error']; ?>
            </div>
            <?php unset($_SESSION['error']); ?>
        <?php endif; ?>

        <div class="row">
            <!-- Account Details or Login/Create Form -->
            <div class="col-md-3" style="background-color: #eee;">
                <div class="account">
                <?php include 'partials/account.php'; ?>
                </div>
            </div>

            <!-- Feed -->
            <div class="col-md-7">
              
                <?php include 'partials/feed.php'; ?>
            </div>

            <!-- Users and Follow Functionality -->
            <div class="col-md-2">
               
                <?php include 'partials/users.php'; ?>
            </div>
        </div>
    </div>
</body>
</html>
