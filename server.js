const express = require("express");
const connectDB = require("./database");
const morgan = require("morgan");
//const bodyParser = require("body-parser");
const cors = require("cors");
const { readdirSync } = require("fs");
const swaggerUI = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerConfig = require("./documentation/swagger.config.json");
require("dotenv").config();
//const userRoutes = require ("./routes/user");

//app

const app = express();

//conexion DB

connectDB();

//middlewares

app.use(morgan("dev"));
app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: false }));
const swaggerDocs = swaggerJsdoc(swaggerConfig);
app.use("/api/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs, { explorer: true }));
app.use(cors());

//rutas
//app.use("/api", userRoutes);

readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

//port

const port = process.env.PORT || 8000;

app.listen(port,()=> console.log (`Server on port ${port}`));