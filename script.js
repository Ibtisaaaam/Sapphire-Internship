// Get elements
const fetchBtn = document.querySelector('#fetch-btn');
const postsContainer = document.querySelector('#posts-container');

// Fetch posts from API
const fetchPosts = async () => {
    try {
        // Show loading message
        postsContainer.innerHTML = '<p>Loading posts...</p>';

        // Get data from API
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');

        // Check if response is okay
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Convert response to JSON
        const posts = await response.json();

        // Show posts
        renderPosts(posts);

    } catch (error) {
        // Show error message
        postsContainer.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    }
};

// Create cards for posts
const renderPosts = (postsArray) => {
    const postsHTML = postsArray.map(post => {
        return `
            <div class="card">
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            </div>
        `;
    }).join('');

    postsContainer.innerHTML = postsHTML;
};

// Run function when button is clicked
fetchBtn.addEventListener('click', fetchPosts);