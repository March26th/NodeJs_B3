const express = require('express')
const router = express.Router();

const courseController = require("../controllers/courseControllers")

router.route("/users")
.get(courseController.getAll)
.post(courseController.create)

router.route("/users/:id")
.put(courseController.update)
.delete(courseController.delete)
module.exports = router;