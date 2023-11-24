<?php if (isset($_SESSION['user'])): ?>
    <!-- Display account details -->
    <p>Welcome, <?php echo $_SESSION['user']['username']; ?></p>
    <a href="logout.php">Logout</a>
    <!-- Logout button -->
    <!-- ... -->
<?php else: ?>
    <!-- Display login/create form -->
    <form id="loginForm" method="post" action="login.php">
    	<center><img src="images/login.svg" style="width: 80%;"></center>
        <div class="mb-3">
            <label for="username" class="form-label">Username or Email</label>
            <input type="text" class="form-control" id="username" name="username" placeholder="Username/Email" required>
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Zip Code (Password)</label>
            <input type="password" class="form-control" id="password" name="password" placeholder="Enter Password" required>
        </div>
        <button type="submit" class="btn-login">Login</button>
    </form>
<?php endif; ?>
