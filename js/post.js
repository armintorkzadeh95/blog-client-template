// Funktion för att hämta inläggsdetaljer
function fetchPostDetails(postIndex) {
    const apiUrl = `https://blog-api-assignment.up.railway.app/posts/${postIndex}`;

    // Använd fetch för att hämta data från API
    fetch(apiUrl)
        .then(response => response.json())
        .then(post => displayPostDetails(post))
        .catch(error => console.error('Error fetching post:', error));
}

// Funktion för att visa inläggsdetaljer på sidan
function displayPostDetails(post) {
    // Uppdatera DOM-element med inläggsdetaljer
    document.getElementById("postTitle").innerText = post.title;
    document.getElementById("postAuthor").innerText = "Author: " + post.author;
    document.getElementById("postDate").innerText = "Date: " + post.date;
    document.getElementById("postTags").innerText = "Tags: " + (post.tags ? post.tags.join(", ") : "N/A");
    document.getElementById("postContent").innerHTML = post.content;
}

// Funktion för att gå tillbaka med webbläsarhistorik
function goBack() {
    window.history.back();
}

// Händelseavlyssnare för DOMContentLoaded för att hämta inläggsdetaljer
document.addEventListener("DOMContentLoaded", function () {
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const postId = params.get('id');

    console.log("Query String:", queryString);

    // Om post ID finns, hämta inläggsdetaljer
    if (postId) {
        console.log("Post ID:", postId);
        fetchPostDetails(postId);
    } else {
        console.error("Post ID not found in the URL.");
    }
});

// Funktion för att visa mer innehåll
window.readMore = function(content) {
    document.getElementById("postContent").innerHTML = content;
};