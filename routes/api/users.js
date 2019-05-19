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

//activities

router
  .route("/:id/activities")
  .get(usersController.findById)
  .put(usersController.addActivity)
  .delete(usersController.remove);

router
  .route("/:id/activities/:activityId")
  .get(usersController.removeActivity)

// //friends

router
  .route("/:id/friends")
  .get(usersController.findById)
  .put(usersController.addFriend)

router
  .route("/:id/friends/:friendId")
  .delete(usersController.removeFriend)

// //goals

router
  .route("/:id/goals")
  .get(usersController.findById)
  .put(usersController.addGoal)
  .delete(usersController.remove);

router
  .route("/:id/goals/:goalId")
  .delete(usersController.removeGoal)

// //badges
router
  .route("/:id/badges")
  .get(usersController.findById)
  .put(usersController.addBadge)
  .delete(usersController.remove);

router
  .route("/:id/badges/:badgeId")
  .get(usersController.removeActivity)

// //challenges

router
  .route("/:id/challenges")
  .get(usersController.findById)
  .put(usersController.addChallenge)
  .delete(usersController.remove);

router
  .route("/:id/challenges/:challengeId")
  .get(usersController.removeChallenge)

module.exports = router;
