var express = require("express");
const path = require("path");
const productsRoute = require("./products.route");
const categoriesRoute = require("./categories.route");
const authRoute = require("./auth.route");
const cartRoute = require("./cart.route");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.sendFile(path.join(__dirname + "./../views/index.html"));
});

router.use("/auth", authRoute);
router.use("/categories/", categoriesRoute);
router.use("/products", productsRoute);
router.use("/cart", cartRoute);
module.exports = router;
