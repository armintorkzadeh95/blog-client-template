// Definiera postData med exempeldata
const postData = {
    title: "",
    content: ""
};

// Den här funktionen fyller formuläret med data som erhållits från funktionen getPostData().
function fillForm() {
    // Ställ in värdet på inmatningsfältet 'titel' till titeln och textområdet "innehåll" till innehållet från postData
    document.getElementById('title').value = postData.title;
    document.getElementById('content').value = postData.content;
}

// Funktionen uppdaterar ett inlägg med data som anges i formuläret.
function updatePost() {
    const updatedData = {
        title: document.getElementById('title').value,
        content: document.getElementById('content').value
    };
    // Anrop funktionen sendUpdatedPost() med den uppdaterade datan
    if (sendUpdatedPost(updatedData)) {
        window.location.href = 'admin/index.html';
    }
}
// Anrop funktionen fillForm() för att fylla i formuläret med initiala data
window.onload=fillForm;