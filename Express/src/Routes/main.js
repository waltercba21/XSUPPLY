const express = require("express");
const router = express.Router();
const mainController = require("../Controllers/mainController");

router.get("/", mainController.index);
router.get("/about", mainController.about);
router.get("/recetas", mainController.recetas);

module.exports = router;