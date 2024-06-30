const { Router } = require("express");
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

const { getFilesHandler, postFileHandler, listFilseHandler, getOneFileHandler } = require("../Handlers/FilesHandler");

const FilesRouter = Router();

FilesRouter.get("/", getFilesHandler);
FilesRouter.post("/upload", upload.single('file'), postFileHandler); // El nombre del campo aquí debe ser 'pdf'
FilesRouter.get("/download", listFilseHandler); // Ruta para descargar archivos
FilesRouter.get("/download/:id", getOneFileHandler); // Ruta para descargar archivos

module.exports = FilesRouter;
