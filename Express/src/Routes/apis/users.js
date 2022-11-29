const express = require("express");
const router = express.Router();
const usersAPIController = require("../../Controllers/apis/usersApiController");

//======== USER ID FOR API =========
router.get("/users/:id", usersAPIController.profile);

//======== USERS ARRAY =========
router.get("/usersList", usersAPIController.list);

module.exports = router;
