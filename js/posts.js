// Vänta tills HTML-innehållet är helt laddat innan du kör skriptet
document.addEventListener("DOMContentLoaded", function () {
    // API-slutpunkt för att hämta blogginlägg
    const apiUrl = "https://blog-api-assignment.up.railway.app/posts";

    // Hämta blogginlägg från API:et
    fetch(apiUrl)
        .then(response => {
            // Kontrollera om HTTP-svaret är framgångsrikt
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            // Analysera svaret som JSON
            return response.json();
        })
        .then(posts => displayBlogPosts(posts))
        .catch(error => console.error('Error fetching blog posts:', error));

    // Funktion för att visa blogginlägg på sidan
    function displayBlogPosts(posts) {
        // Hämta containerelementet där blogginlägg kommer att visas
        const blogPostsContainer = document.getElementById('blog-posts');
        console.log(posts);

        // Gå igenom varje blogginlägg och skapa HTML-element för att visa dem
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.innerHTML = `
            <tr data-id="${post._id}">
                <h2 class="editable" contenteditable="true">${post.title}</h2>
                <p>Författare: ${post.author} ${new Date().toLocaleDateString()}</p>
                <p>Tagg: ${post.tags}</p>
                <p>Innehåll:${post.content.slice(0, 100)}</p>
                <a href="post.html?id=${post._id}" data-post-id="${post._id}">Read more</a>
            </tr>
        `;
            // Lägg till postelementet i blogginläggsbehållaren
            blogPostsContainer.appendChild(postElement);
        });

        // Lägg till evenemangslyssnare till "Läs mer"-länkar
        const readMoreLinks = document.querySelectorAll('a[data-post-id]');
        readMoreLinks.forEach(link => {
            link.addEventListener('click', function (event) {
                event.preventDefault();
                const postId = this.getAttribute('data-post-id');
                window.location.href = `post.html?id=${postId}`;
            });
        });
    }
});