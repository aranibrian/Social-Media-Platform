// Function to fetch and display posts
function fetchPosts() {
    $.ajax({
        url: 'https://my-json-server.typicode.com/aranibrian/Social-Media-Platform/posts',
        method: 'GET',
        success: function(posts) {
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


function fetchUsers() {
    $.ajax({
        url: 'https://my-json-server.typicode.com/aranibrian/Social-Media-Platform/users',
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
