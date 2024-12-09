const express = require("express");
const tesseract = require("node-tesseract-ocr")
const { upload } = require("./config/multer");
const { ocrHandler } = require("./config/ocr");
const fs = require("fs")
const app = express();
const path = require("path")
const PORT = 5000;

app.use(express.json());

app.use(express.static("public"));

app.post("/upload", upload.array("files[]", 10), async (req, res) => {
    const { files } = req;
  
  
  
    const filePath = path.join(__dirname, "uploads", files[0].filename);
    
    try {
      const img = fs.readFileSync(filePath);
        
      const text = await tesseract.recognize(img, ocrHandler);
  
    //   console.log("OCR Result:", text);
  
      res.json({ success: true, files: req.files, text });
    } catch (error) {
        console.log(error)
      res.status(500).json({ success: false, message: "Error during OCR processing.", error: error.message });
    } finally {
      fs.unlink(filePath, (err) => {
        if (err) console.error("Error deleting file:", err.message);
      });
    }
  });

  const test = () => {

    tesseract
      .recognize("https://tesseract.projectnaptha.com/img/eng_bw.png", { lang: "eng",  oem: 1,
        psm: 3, })
      .then((text) => console.log("OCR Result:", text))
      .catch((error) => console.error("OCR Error:", error.message));
  }
  test()
app.listen(PORT,() => {
    console.log("running on ",PORT)
})

