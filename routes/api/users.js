const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

  router
  .route("/:id/activities")
  .get(usersController.findById)
  .put(usersController.addActivity)
  .delete(usersController.remove);

  router
  .route("/:id/activities/:activityId")
  .get(usersController.removeActivity)

  router
  .route("/:id/goals")
  .get(usersController.findById)
  .put(usersController.addGoal)
  .delete(usersController.remove);

  router
  .route("/:id/badges")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

  router
  .route("/:id/friends")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

module.exports = router;
