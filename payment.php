<?php
// Start the session
error_reporting(E_ALL);
ini_set('display_errors', 1);
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Payment Page - Social Media Platform</title>
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
        <div class="row">
            <div class="col-md-6">
                <img src="images/pay.svg" style="width: 100%;" />
            </div>
            <div class="col-md-6">
                <form id="payment-form">
                    <div class="mb-3">
                    <label for="username" class="form-label">Your Name</label>
                    <input type="text" class="form-control" id="username" name="username" placeholder="Your official Names" required>
                  </div>

                    <div class="mb-3">
                    <label for="username" class="form-label">Your Email</label>
                    <input type="text" class="form-control" id="username" name="username" placeholder="example@gmail.com" required>
                  </div>

                    <div class="mb-3">
        <label for="paymentMethod" class="form-label">Select Payment Method</label>
        <select class="form-select" id="paymentMethod" name="paymentMethod" required>
            <option value="">Select a method...</option>
            <option value="creditCard">Credit Card</option>
            <option value="debitCard">Debit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bankTransfer">Bank Transfer</option>
            <!-- Add more payment methods as needed -->
        </select>
    </div>

    <button type="button" class="btn-login">Make Payment <i class="fa fa-euro"></i></button>
                </form>
            </div>
        </div>
    </div>
</body>
</html>
