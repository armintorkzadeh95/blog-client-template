const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('id');

fetchPostDetails(postId);

async function fetchPostDetails(id) {
    try {
        const response = await fetch(`https://blog-api-assignment.up.railway.app/posts/${id}`);
        const post = await response.json();
        console.log(post)

        document.getElementById('post-content').innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.author} ${new Date(post.date).toLocaleDateString()}</p>
            <p>${post.tags}</p>
            <p>${post.content}</p>
        `;