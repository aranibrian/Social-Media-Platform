<?php if (isset($_SESSION['user'])): ?>
    <!-- Display account details -->
    <p>Welcome, <?php echo $_SESSION['user']['username']; ?></p>
    <!-- Logout button -->
    <!-- ... -->
<?php else: ?>
    <!-- Display login/create form -->
    <form id="loginForm" method="post" action="login.php">
        <div class="mb-3">
            <label for="username" class="form-label">Username or Email</label>
            <input type="text" class="form-control" id="username" name="username" required>
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Zip Code (Password)</label>
            <input type="password" class="form-control" id="password" name="password" required>
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
    </form>
<?php endif; ?>
