const express = require('express')
const router = express.Router();

const userController = require("../controllers/userControllers")
const authMiddleware = require("../middlewares/authMiddleware")
router.route("/users")
.get(authMiddleware.author,userController.getAll)
.post(userController.create)

router.route("/users/:id")
.put(userController.update)
.delete(userController.delete)
module.exports = router;