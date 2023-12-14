// Förutsatt att du har en API-slutpunkt som denna
const apiUrl = "https://blog-api-assignment.up.railway.app/posts";

document.addEventListener("DOMContentLoaded", function () {
    // Befintliga kod här
    fetchPostDetails("6579908e31b9d5002a63933b");});

function fetchPostDetails(postIndex) {
    // Gör GET-förfrågan till API-slutpunkten
    fetch(`${apiUrl}/${postIndex}`)
        .then(response => response.json())
        .then(post => displayPostDetails(post))
        .catch(error => console.error('Error fetching post:', error));
}

function displayPostDetails(post) {
    document.getElementById("postTitle").innerText = post.title;
    document.getElementById("postAuthor").innerText = "Author: " + post.author;
    document.getElementById("postDate").innerText = "Date: " + post.date;

    // Använd en ternär operator för att kontrollera om post.tags är definierade
    document.getElementById("postTags").innerText = "Tags: " + (post.tags ? post.tags.join(", ") : "N/A");

    document.getElementById("postContent").innerHTML = post.content;
}

function goBack() {
    // Använd webbläsarens historikobjekt för att navigera tillbaka
    window.history.back();
}

// funktion för att visa mer innehåll
window.readMore = function(content) {
   // Istället för att varna visa innehållet i en modal eller uppdatera sidan efter behov
    document.getElementById("postContent").innerHTML = content;
};