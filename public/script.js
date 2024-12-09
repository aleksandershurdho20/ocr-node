
        const uploadButton = document.getElementById('upload-btn');
        const removeButton = document.getElementById('remove-btn');
        const fileInput = document.getElementById('file-upload');
        const statusText = document.getElementById('status');
        const fileListContainer = document.getElementById('file-list');

        fileInput.addEventListener("change", function(event) {
            fileListContainer.innerHTML = '';
            const files = event.target.files;

            for (let file of files) {
                const fileItem = document.createElement("p");
                fileItem.textContent = file.name;
                fileListContainer.appendChild(fileItem);
            }
        });

        uploadButton.addEventListener('click', function() {
            const files = fileInput.files;

            if (files.length === 0) {
                statusText.textContent = "Please select at least one file.";
                return;
            }

            const formData = new FormData();
            for (let file of files) {
                formData.append('files[]', file);
            }

            fetch('/upload', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    statusText.textContent = "Files uploaded successfully!";
                } else {
                    statusText.textContent = "Error uploading files.";
                }
            })
            .catch(error => {
                statusText.textContent = "An error occurred: " + error.message;
            });
        });

        removeButton.addEventListener('click', function() {
            fileInput.value = '';  
            fileListContainer.innerHTML = '';  
            statusText.textContent = '';  
        });
 
