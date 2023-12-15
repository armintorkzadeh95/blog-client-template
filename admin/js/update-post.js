function fillForm() {
    const postData = getPostData();
    document.getElementById('title').value = postData.title;
    document.getElementById('content').value = postData.content;
}
function updatePost() {
    const updatedData = {
        title: document.getElementById('title').value,
        content: document.getElementById('content').value
    };

    if (sendUpdatedPost(updatedData)) {
        window.location.href = 'admin/index.html';
    }
}

fillForm();