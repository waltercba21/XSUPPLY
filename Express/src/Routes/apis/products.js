const express = require("express");
const router = express.Router();
const productsAPIController = require("../../Controllers/apis/productsApiController");

//======== USER ID FOR API =========
router.get("/products/:id", productsAPIController.detail);

//======== USERS ARRAY =========
router.get("/productsList", productsAPIController.list);

//======== LAST PRODUCT =========
router.get("/lastProduct", productsAPIController.lastProduct);

module.exports = router;
