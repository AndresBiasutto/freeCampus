const server = require('./src/app.js');
const { conn } = require('./src/db.js');
//const { DB_PORT } = process.env;
const port = process.env.PORT || 4000;


// Syncing all the models at once. alter o force
conn.sync({ alter: true }).then(() => {
  server.listen(port, () => {
    console.log( `Servidor conectado en el puerto ${port}`  ); // eslint-disable-line no-console
  });
});