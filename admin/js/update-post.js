function fillForm() {
    const postData = getPostData();
    document.getElementById('title').value = postData.title;
    document.getElementById('content').value = postData.content;
}