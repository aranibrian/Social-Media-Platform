<?php
// Start the session
error_reporting(E_ALL);
ini_set('display_errors', 1);
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Social Media Platform</title>
    <!-- Latest compiled and minified CSS -->
    <!-- Font Awesome CDN -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">

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
    <div class="container-fluid">
         <!-- Display error message -->
            <?php if (isset($_SESSION['error'])): ?>
            <div class="alert alert-danger" role="alert">
                <?php echo $_SESSION['error']; ?>
            </div>
            <?php unset($_SESSION['error']); ?>
            <?php endif; ?>
       
        <div class="row">
           
            <!-- Account Details or Login/Create Form -->
            <div class="col-md-3">
                <div class="account">
                <?php include 'partials/account.php'; ?>
                </div>
            </div>

            <!-- Feed -->
            <div class="col-md-5">
                <div class="post">
                    <div class="row">
                        
                        <div class="col-md-12">
                            <input type="text" name="post" placeholder="What is on your Mind?">
                        </div>
                    </div> 

                    <div class="row">
                        <div class="col-md-6">
                            <button class="btn btn-light button"><i class="fa fa-camera"></i> Post Photo</button>
                        </div>
                        <div class="col-md-6">
                            <button class="btn btn-light button"><i class="fa fa-video-camera"></i> Post Video</button>
                        </div>
                         
                    </div>   
                </div>
                <div class="feed">
                <?php include 'partials/feed.php'; ?>
                </div>
            </div>

            <!-- Users and Follow Functionality -->
            <div class="col-md-4">
               <div class="users">
                <?php include 'partials/users.php'; ?>
               </div>
            </div>
<!-- Followed Users Modal -->
<div class="modal fade" id="followedUsersModal" tabindex="-1" aria-labelledby="followedUsersModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="followedUsersModalLabel">Followed Users</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" id="followedUsersList">
                <!-- Followed users will be listed here -->
            </div>
        </div>
    </div>
</div>



        </div>
    </div>
</body>
</html>
