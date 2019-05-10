const router = require("express").Router();
const badgesController = require("../../controllers/badgesController.js");

// Matches with "/api/badge"
router.route("/")
  .get(badgesController.findAll)


// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(badgesController.findById)


module.exports = router;
