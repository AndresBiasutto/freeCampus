const { File, Module } = require("../../db");
const bucket = require("../../firebaseConfig");
const { v4: uuidv4 } = require("uuid");

const postFiles = async (file, chapterId) => {
  try {
    const fileName = `${uuidv4()}.pdf`;
    const fileUpload = bucket.file(fileName);

    const stream = fileUpload.createWriteStream({
      metadata: {
        contentType: file.mimetype,
      },
    });

    return new Promise((resolve, reject) => {
      stream.on("error", (error) => {
        reject(error);
      });

      stream.on("finish", async () => {
        try {
          await fileUpload.makePublic();
          const publicUrl = `https://storage.googleapis.com/${bucket.name}/${fileUpload.name}`;
          console.log(file);
          const createdFile = await File.create({
            data: {
              id: uuidv4,
              fieldname: file.fieldname,
              originalname: file.originalname,
              publicurl: publicUrl,
            },
            chapterId: chapterId,
          });

          const module = await Module.findByPk(chapterId);

          if (!module) {
            throw new Error("Module not found");
          }

          createdFile.Module = {
            id: module.id,
            name: module.name,
            description: module.description,
          };

          resolve(createdFile);
        } catch (error) {
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
