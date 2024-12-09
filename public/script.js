document.getElementById("file-upload").addEventListener("change", function(event) {
    const {files} = event.target
    const uploadButton = document.getElementById('upload-btn');
    const removeButton = document.getElementById('remove-btn');
    const fileInput = document.getElementById('file-upload');
    const statusText = document.getElementById('status');
    const fileListContainer = document.getElementById('file-list');
    fileListContainer.innerHTML = '';

    for (let file of files) {
        const fileItem = document.createElement("p");
        fileItem.textContent = file.name;
        fileListContainer.appendChild(fileItem);
   
        console.log(file,"file")
    }

    removeButton.addEventListener('click', function() {
        fileInput.value = '';  
        fileListContainer.innerHTML = '';  
        statusText.textContent = '';  
    });
});
