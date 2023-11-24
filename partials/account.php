<?php if (isset($_SESSION['user'])): ?>
    <!-- Display account details -->
    <p>Welcome, <?php echo $_SESSION['user']['username']; ?></p>
    <!-- Logout button -->
    <!-- ... -->
<?php else: ?>
    <!-- Display login/create form -->
    <form id="loginForm">
        <!-- Form fields for username, zip code -->
        <!-- Submit button -->
    </form>
<?php endif; ?>
