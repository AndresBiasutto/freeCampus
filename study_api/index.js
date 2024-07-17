const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const {
  DB_PORT, //PUERTO LOCAL
  RENDER_PORT //PURTO DE RENDER
} = process.env;

// Syncing all the models at once. alter o force
conn.sync({ alter: true }).then(() => {
  server.listen(RENDER_PORT, () => {
    console.log( `Servidor conectado en el puerto ${RENDER_PORT}`  ); // eslint-disable-line no-console
  });
});