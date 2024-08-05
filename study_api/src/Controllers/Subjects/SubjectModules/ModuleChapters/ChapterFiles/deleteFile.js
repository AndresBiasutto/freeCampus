const { File } = require("../../../../../db");
const bucket = require("../../../../../firebaseConfig");

const deleteFile = async (fileId) => {
  try {
    // Buscar el archivo en la base de datos
    const file = await File.findByPk(fileId);

    console.log(file);
    if (!file) {
      throw new Error("File not found");
    }

    // Obtener el nombre del archivo en Firebase
    const fileName = file.data.publicurl.split('/').pop();
    const fileRef = bucket.file(fileName);

    // Eliminar el archivo de Firebase
    await fileRef.delete();

    // Eliminar el registro del archivo en la base de datos
    await file.destroy();
    return { message: "File deleted successfully" };
  } catch (error) {
    throw new Error(`Failed to delete file: ${error.message}`);
  }
};

module.exports = deleteFile;