const express = require('express')
const router = express.Router();

const userController = require("../controllers/userControllers")

router.route("/users")
.get(userController.getAll)
.post(userController.create)

router.route("/users/:id")
.put(userController.update)
.delete(userController.delete)
module.exports = router;