const router = require("express").Router();
const userRoutes = require("./users");
const badgeRoutes = require("./badges");

// User routes
router.use("/users", userRoutes);
router.use("/badges", badgeRoutes);

module.exports = router;
