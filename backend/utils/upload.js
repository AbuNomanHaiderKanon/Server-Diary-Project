import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';

const storage = new GridFsStorage({
    url: process.env.DB_URL,
    options: { useNewUrlParser: true, useUnifiedTopology: true }, // Ensure proper connection
    file: (request, file) => {
        const match = ["image/png", "image/jpg", "image/jpeg"]; // Added "image/jpeg"

        if (match.indexOf(file.mimetype) === -1) {  // Fixed typo
            return `${Date.now()}-blog-${file.originalname}`;
        }

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        };
    }
});

export default multer({ storage });
