const { Router } = require("express");
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

const { getFilesHandler, postFileHandler, listFilseHandler, getOneFileHandler } = require("../Handlers/FilesHandler");

const subjectsRouter = Router();

subjectsRouter.get("/", getFilesHandler);
subjectsRouter.post("/upload", upload.single('file'), postFileHandler); // El nombre del campo aquí debe ser 'pdf'
subjectsRouter.get("/download", listFilseHandler); // Ruta para descargar archivos
subjectsRouter.get("/download/:id", getOneFileHandler); // Ruta para descargar archivos

module.exports = subjectsRouter;