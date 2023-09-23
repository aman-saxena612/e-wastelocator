import multer from "multer";

const storage = multer.memoryStorage();

const singleUpload = multer({
 storage: storage,
 limits: {
   fileSize: 15 * 1024 * 1024, // Set the maximum file size limit to 15MB (in bytes)
 },
}).single("file");

export default singleUpload;
