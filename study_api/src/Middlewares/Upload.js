const multer  = require('multer')
const upload = multer({dest: 'uploads/'})

const uploadMW = upload.single('pdf');

module.exports= uploadMW;