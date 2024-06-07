const { File } = require("../../db");
const  bucket  = require("../../firebaseConfig");
const { v4: uuidv4 } = require('uuid');

const postFiles = async (file) => {
  console.log(file);
  try {
    const fileName = `${uuidv4()}.pdf`;
    const originalName= file.originalname;
    const fileUpload = bucket.file(fileName);
    console.log("Uploading file to Firebase Storage: ", fileName);

    const stream = fileUpload.createWriteStream({
      metadata: {
        contentType: file.mimetype,
      },
    });
console.log(fileUpload);
    return new Promise((resolve, reject) => {
      stream.on('error', (error) => {
        console.error("Error during file upload: ", error);
        reject(error);
      });

      stream.on('finish', async () => {
        try {
          await fileUpload.makePublic();
          const publicUrl = `https://storage.googleapis.com/${bucket.name}/${fileUpload.name}`;
          console.log("File uploaded and made public at URL: ", publicUrl);
          const createdFile = await File.create({ data: {
            fieldname: file.fieldname,
            originalname: file.originalname,
            publicurl: publicUrl,

          } });
          resolve(createdFile);
        } catch (error) {
          console.error("Error making file public: ", error);
          reject(error);
        }
      });

      stream.end(file.buffer);
    });
  } catch (error) {
    throw new Error(`Failed to upload file: ${error.message}`);
  }
};

module.exports = postFiles;