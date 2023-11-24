// Function to fetch and display posts
function fetchPosts() {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'GET',
        success: function(posts) {
            var postsHtml = posts.map(function(post) {
                return `<div class="post"><h6>${post.title}</h6><p>${post.body}</p></div>`;
            }).join('');
            $('#feed').html(postsHtml);
        },
        error: function() {
            console.error("Error fetching posts");
        }
    });
}

// Function to fetch and display users
function fetchUsers() {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users',
        method: 'GET',
        success: function(users) {
            var usersHtml = users.map(function(user) {
                return `<div class="user"><img src="images/user.png" alt="User Avatar" class="user-avatar"><span class="user-name">${user.name}</span><button class="btn-follow"><i class="fa fa-plus" aria-hidden="true"></i> Follow</button></div>`;
            }).join('');
            $('#users').html(usersHtml);
        },
        error: function() {
            console.error("Error fetching users");
        }
    });
}

// A function to fetch user details
function fetchUserDetails(username) {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users',
        method: 'GET',
        success: function(users) {
            var loggedInUser = users.find(function(user) {
                return user.username === username;
            });
            if (loggedInUser) {
                var userDetailsHtml = `<p>Name: ${loggedInUser.name}</p><p>Email: ${loggedInUser.email}</p><p>City: ${loggedInUser.address.city}</p><p>Company: ${loggedInUser.company.name}</p>`;
                $('#userDetails').html(userDetailsHtml);
            }
        },
        error: function() {
            console.error("Error fetching user details");
        }
    });
}

// Function to fetch posts for a specific user based on username
function fetchUserPosts(username) {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users',
        method: 'GET',
        success: function(users) {
            var user = users.find(function(u) {
                return u.username === username;
            });
            if (user) {
                fetchPostsByUserId(user.id);
            }
        },
        error: function() {
            console.error("Error fetching users");
        }
    });
}

// Function to fetch posts by user ID
function fetchPostsByUserId(userId) {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts?userId=' + userId,
        method: 'GET',
        success: function(posts) {
            var userPostsHtml = posts.map(function(post) {
                return `<div class="post"><h6>${post.title}</h6><p>${post.body}</p></div>`;
            }).join('');
            $('#userPosts').html(userPostsHtml);
        },
        error: function() {
            console.error("Error fetching posts for user");
        }
    });
}

// Event listener for logout button
document.addEventListener('DOMContentLoaded', function() {
    var logoutButton = document.querySelector('.btn-login-sec');
    if (logoutButton) {
        logoutButton.addEventListener('click', function() {
            window.location.href = 'logout.php';
        });
    }
});

// Document ready functions
$(document).ready(function() {
    var profileCard = $('.profile-card');
    if (profileCard.length && profileCard.data('username')) {
        var username = profileCard.data('username');
        fetchUserDetails(username);
    }

    fetchPosts();
    fetchUsers();

    $('.btn-login').on('click', function() {
        if (profileCard.length && profileCard.data('username')) {
            var username = profileCard.data('username');
            fetchUserPosts(username);
        }
    });
});
