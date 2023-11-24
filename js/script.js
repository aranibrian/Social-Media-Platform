// Function to fetch and display posts
function fetchPosts() {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'GET',
        success: function(posts) {
            var postsHtml = posts.map(function(post) {
                return '<div class="post"><h6>' + post.title + '</h6><p>' + post.body + '</p></div>';
            }).join('');
            $('#feed').html(postsHtml);
        },
        error: function() {
            console.error("Error fetching posts");
        }
    });
}

function fetchUsers() {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users',
        method: 'GET',
        success: function(users) {
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
