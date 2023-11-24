<?php if (isset($_SESSION['user'])): ?>
    <!-- Display account details -->
    <div class="profile-card" data-username="<?php echo $_SESSION['user']['username']; ?>">
	<center><img src="images/user.png" style="width: 30%;border: 4px solid #eee;border-radius: 50%;"></center>	
    <h6>Hi there <?php echo $_SESSION['user']['username']; ?>!</h6>
    <hr>
    <h6 style="text-align: left;margin: 0;margin-bottom: 10px;">My Profile</h6>
    <div id="userDetails"><!-- User details will be loaded here --></div>
    <button type="button" class="btn-login" data-bs-toggle="modal" data-bs-target="#myPostsModal" style="margin-bottom: 5px;">My Posts <i class="fa fa-pencil"></i>
	</button>

    <!-- My Posts Modal -->
<div class="modal fade" id="myPostsModal" tabindex="-1" aria-labelledby="myPostsModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content" style="background-color: #eee;">
            <div class="modal-header">
                <h5 class="modal-title" id="myPostsModalLabel">My Posts</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-md-6">
                        <!-- Image can be placed here -->
                        <img src="images/posts.svg" alt="Image" class="img-fluid">
                    </div>
                    <div class="col-md-6" id="userPosts">
                        <!-- User posts will be loaded here -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

    <button type="button" class="btn-login-sec">Logout <i class="fa fa-sign-out"></i></button>

	</div>
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
