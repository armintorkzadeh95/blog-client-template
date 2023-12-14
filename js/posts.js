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

        // Gå igenom varje blogginlägg och skapa HTML-element för att visa dem
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>Author: ${post.author}</p>
                <p>Date: ${post.date}</p>
                <p>${truncateText(post.content, 100)}</p>
                <a href="#" onclick="readMore('${post.content}')">Read more...</a>
                <p>Tags: ${post.tags ? post.tags.join(', ') : 'No tags'}</p>
                <hr>
            `;
            // Lägg till postelementet i blogginläggsbehållaren
            blogPostsContainer.appendChild(postElement);
        });
    }
    // Funktion för att trunkera text till en angiven maximal längd
    function truncateText(text, maxLength) {
        return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    }
    // Funktion för att visa en läs mer-varning med hela innehållet
    window.readMore = function(content) {
        alert(content);
    };
});