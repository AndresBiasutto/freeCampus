const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const routes = require("./Routes/RouterIndex.js");
const cors = require("cors")
require("./db.js");

const server = express();

server.name = "API";

const corsOptions = {
  // origin: 'http://localhost:5173', //frontend local
  origin: 'https://66986e39539f4d11dbea98bd--wonderful-strudel-ee34da.netlify.app', //frontend deploy
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type'],
  credentials: true,
};
server.use(cors(corsOptions))
server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));

server.use("/", routes);

// Error catching endware.
server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
