const express = require("express");
const tesseract = require("node-tesseract-ocr")
const { upload } = require("./config/multer");
const { ocrHandler } = require("./config/ocr");

const app = express();

const PORT = 5000;

app.use(express.json());

app.use(express.static("public"));

app.post('/upload', upload.array('files[]', 10), (req, res) => {

    const {files}=req

    console.log(files,"filo")

    
    res.json({ success: true, files: req.files });
});
app.listen(PORT,() => {
    console.log("running on ",PORT)
})

