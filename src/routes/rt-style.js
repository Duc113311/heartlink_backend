const express = require("express");

const BaseControllers = require("../../src/controllers/StyleOption/styleOptionController.js");

const router = express.Router();

// Method get, post, put, delete
router.get("/getAll", BaseControllers.getAllStyleOptionController);

router.post("/create", BaseControllers.createStyleOptionController);

//

module.exports = router;
