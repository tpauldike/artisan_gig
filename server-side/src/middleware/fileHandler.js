import multer from "multer";
import path from "path"

export const upload = multer({
    storage: diskStorage({}),
    fileFilter: (req, file, cb) => {
        let ext =  path.extname(file.originalname);
        if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
           cb(new Error("File type not supported"), false);
        }
        cb(null, true);
    }
})
// handle bars
// multer documentation