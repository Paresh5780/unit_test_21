const express = require("express");
let bodyParser = require("body-parser");
const router = require("./routes/index");
const ErrorHandler = require("./middlewares/ErrorHandler");
const db = require("./model/index1");
const dbConnection = db.connection;
const expressApp = express();
expressApp.use(bodyParser.json());
expressApp.use(router);
expressApp.use(ErrorHandler);

db.category.hasMany(db.product);

dbConnection.sync({ force: true }).then(() => {
  init();
});

let init = async () => {
  await insertCategories();
  await insertRoles();
};

let insertCategories = async () => {
  await db.category.bulkCreate([
    { name: "Fashion" },
    { name: "Mobile" },
    { name: "Electronics" },
    { name: "Appliances" },
  ]);
  console.log("Categories Added");
};

let insertRoles = async () => {
  await db.roles.bulkCreate([
    { id: 1, name: "user" },
    { id: 2, name: "admin" },
  ]);
  console.log("roles added");
};

module.exports = expressApp;
