document.getElementById("file-upload").addEventListener("change", function(event) {
    const {files} = event.target
    const fileListContainer = document.getElementById("file-list");
    fileListContainer.innerHTML = '';

    for (let file of files) {
        const fileItem = document.createElement("p");
        fileItem.textContent = file.name;
        fileListContainer.appendChild(fileItem);
    }
});
