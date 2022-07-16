const express = require("express");

const BaseControllers = require("../../src/base/baseControllers.js");
const UserController = require('../../src/controllers/users/userController.js')
const router = express.Router();

// Method get, post, put, delete
router.get("/:entityName", UserController.getAllUserController);

router.post("/:entityName", BaseControllers.createEntityController);

router.get("/:entityName/:entityId", BaseControllers.getEntityByIdController);

router.delete("/:entityName/:entityId", BaseControllers.deleteEntityController);

router.patch("/:entityName/:entityId", BaseControllers.updateEntityController);

module.exports = router;
