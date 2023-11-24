let postViewCount = 0;
const MAX_POST_VIEWS = 20;

function viewPost(postId) {
    if (postViewCount >= MAX_POST_VIEWS) {
        window.location.href = 'payment.php';
        return;
    }
    postViewCount++;
    updateViewCountDisplay();
    showPostInModal(postId);
}

// Script to update the view count for free user
function updateViewCountDisplay() {
    $('#postCounter').html(`<i class="fa fa-eye"></i> Posts viewed: <b>${postViewCount}/${MAX_POST_VIEWS}</b>`);
}

//Display individual post on a modal
function showPostInModal(postId) {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts/' + postId,
        method: 'GET',
        success: function(post) {
            // Create the modal HTML
            var modalHtml = `
                <div class="modal fade" id="postModal" tabindex="-1" aria-labelledby="postModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">View Post</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <h6>${post.title}</h6>
                                <p>${post.body}</p>
                            </div>
                        </div>
                    </div>
                </div>`;

            // Append it to the body
            $('body').append(modalHtml);

            // Show the modal
            $('#postModal').modal('show');

            // Remove the modal from the DOM on hiding
            $('#postModal').on('hidden.bs.modal', function() {
                $('#postModal').remove();
            });
        },
        error: function() {
            console.error("Error fetching post details");
        }
    });
}


// Function to fetch and display posts
function fetchPosts() {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'GET',
        success: function(posts) {
            var postsHtml = posts.map(function(post) {
                return `
                    <div class="post">
                        <h6>${post.title}</h6>
                        <p>${post.body}..<a href="#" onclick="viewPost(${post.id})" style="text-decoration:none;">View All</a></p>
                        <div class="row post-actions">
                            <div class="col">
                                <button class="btn btn-light">
                                    <i class="fa fa-thumbs-up"></i> Like
                                </button>
                            </div>
                            <div class="col">
                                <button class="btn btn-light">
                                    <i class="fa fa-comment"></i> Comment
                                </button>
                            </div>
                            <div class="col">
                                <button class="btn btn-light" onclick="viewPost(${post.id})">
                                    <i class="fa fa-eye"></i> View Post
                                </button>
                            </div>
                        </div>
                    </div>`;
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
                var encodedName = encodeURIComponent(user.name);  // Encode the user's name
                return `<div class="user">
                            <img src="images/user.png" alt="User Avatar" class="user-avatar">
                            <span class="user-name">${user.name}</span>
                            <button class="btn-follow" data-userid="${user.id}" onclick="toggleFollow(this, ${user.id}, '${encodedName}')">
                                <i class="fa fa-plus" aria-hidden="true"></i> Follow
                            </button>
                        </div>`;
            }).join('');
            $('#users').html(usersHtml);
        },
        error: function() {
            console.error("Error fetching users");
        }
    });
}



//Following status
function toggleFollow(button, userId, encodedName) {
    let userName = decodeURIComponent(encodedName); // Decode the user's name
    let followedUsers = JSON.parse(sessionStorage.getItem('followedUsers')) || [];
    const isFollowing = followedUsers.some(user => user.id === userId);

    if (isFollowing) {
        followedUsers = followedUsers.filter(user => user.id !== userId);
        $(button).html('<i class="fa fa-plus" aria-hidden="true"></i> Follow');
    } else {
        followedUsers.push({ id: userId, name: userName });
        $(button).html('<i class="fa fa-check" aria-hidden="true"></i> Following');
    }

    sessionStorage.setItem('followedUsers', JSON.stringify(followedUsers));
}



//Show following users
function showFollowedUsers() {
    let followedUsers = JSON.parse(sessionStorage.getItem('followedUsers')) || [];
    let followedUsersHtml = followedUsers.map(user => `<p>${user.name}</p>`).join('');
    
    if (!followedUsersHtml) followedUsersHtml = '<p>You have not followed any users yet.</p>';
    $('#followedUsersList').html(followedUsersHtml);
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

            // Clear the followed users from session storage
            sessionStorage.removeItem('followedUsers');
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
