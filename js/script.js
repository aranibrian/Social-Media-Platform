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
                        <p>${post.body}</p>
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


function fetchUsers() {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users',
        method: 'GET',
        success: function(users) {
            var usersHtml = users.map(function(user) {
                return `
                    <div class="user">
                        <img src="images/user.png" alt="User Avatar" class="user-avatar">
                        <span class="user-name">${user.name}</span>
                        <button class="btn-follow"><i class="fa fa-plus" aria-hidden="true"></i> Follow</button>
                    </div>`;
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
