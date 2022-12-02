let express = require("express");
let cartRouter = express.Router();
let cartController = require("./../controller/cart.controller");
//let authJwt = require("./../middlewares/authJwt");

cartRouter.get("/:cartId", cartController.getCart);

cartRouter.put("/:cartId", cartController.updateCart);

cartRouter.post("/", cartController.createCart);

module.exports = cartRouter;
