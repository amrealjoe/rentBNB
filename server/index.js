// const { sequelize } = require("./manager/models");
const express = require("express");
const app = express();
const server = require("http").Server(app);
const port = process.env.PORT || 4041;
const Home = require("./routes/Home")

//MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//ROUTES
app.use("/", Home)

//START SERVER & CONNECT TO PostgreSQL DB
server.listen({ port: port }, async () => {
  console.log(`Client up on http://localhost:${port}`);
//   await sequelize.authenticate();
//   console.log("Database connected.");
});
