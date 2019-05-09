const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/badge"
router.route("/")
  .get(usersController.findAll)


// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(usersController.findById)


module.exports = router;
