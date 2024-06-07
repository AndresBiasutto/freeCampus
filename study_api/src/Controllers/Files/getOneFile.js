const { File } = require("../../db");
const bucket = require('../../firebaseConfig'); 

const downloadFile = async (id) => {
    const dFile = await File.findByPk(id);
    if (!dFile || !dFile.data) {
      throw new Error('Archivo no encontrado o URL no disponible');
    }
  
    const fileName = dFile.data.split('/').pop();
    console.log(`Descargando el archivo: ${fileName}`);
    const file = bucket.file(fileName);
  console.log(file);
    return new Promise((resolve, reject) => {
      const fileStream = file.createReadStream();
      let buffer = [];
  
      fileStream.on('data', (chunk) => {
        buffer.push(chunk);
      });
  
      fileStream.on('end', () => {
        console.log('Archivo descargado exitosamente');
        resolve(Buffer.concat(buffer));
      });
  
      fileStream.on('error', (err) => {
        console.error('Error al descargar el archivo:', err);
        reject(err);
      });
    });
};

module.exports = downloadFile;