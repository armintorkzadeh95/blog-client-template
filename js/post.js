// Hämta frågesträngen från URL:en
const queryString = window.location.search;

// Analysera frågesträngen för att få ett objekt med parameter-värdepar
const params = new URLSearchParams(queryString);

// Hämta värdet som är kopplat till parametern "id".
const postId = params.get('id');

// Logga postId till konsolen
console.log("Post ID:", postId);

// Förutsatt att du har en API-slutpunkt som denna
const apiUrl = "https://blog-api-assignment.up.railway.app/posts";

document.addEventListener("DOMContentLoaded", function () {
    // Använd postId-variabeln i funktionen fetchPostDetails
    fetchPostDetails(postId);
});

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