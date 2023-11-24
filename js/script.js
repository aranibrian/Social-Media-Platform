// Function to fetch and display posts
function fetchPosts() {
    $.ajax({
        url: 'https://my-json-server.typicode.com/typicode/demo/posts',
        method: 'GET',
        success: function(posts) {
            // Process and display posts
            // For example, append them to the 'feed' div
            var postsHtml = posts.map(function(post) {
                return '<div class="post"><h3>' + post.title + '</h3><p>' + post.body + '</p></div>';
            }).join('');
            $('#feed').html(postsHtml);
        },
        error: function() {
            console.error("Error fetching posts");
        }
    });
}

// Function to fetch and display user list
function fetchUsers() {
    $.ajax({
        url: 'https://my-json-server.typicode.com/typicode/demo/users',
        method: 'GET',
        success: function(users) {
            // Process and display users
            // For example, append them to the 'users' div
            var usersHtml = users.map(function(user) {
                return '<div class="user"><p>' + user.name + '</p><button>Follow</button></div>';
            }).join('');
            $('#users').html(usersHtml);
        },
        error: function() {
            console.error("Error fetching users");
        }
    });
}

// Document ready function to initialize AJAX calls
$(document).ready(function() {
    fetchPosts();
    fetchUsers();
});
