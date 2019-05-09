const mongoose = require("mongoose");
const db = require("../models");

// This file empties the users collection and inserts the users below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/tryathlete"
);

let seedAct = {
  sport: "Running",
  distanceMeasurement: "50",
  distanceUnit: "km",
  time: 50
}

let seedBadge = {
  isEarned: false,
  description: "Long Run Fastly",
  name: "Long Runner Badge",
  sport: "Running"
}

let seedGoal = {
  description: "Run 50 km in a week",
  name: "First goal",
  sport: "running",
  isAchieved: false,
  goalType: "distance",
  goalQuant: 50
}

let seedChallenge = {
  name: "First goal",
  sport: "running",
  isAchieved: false,
  goalType: "distance",
  goalQuant: 50,
  challenger: "Jim",
  hasAccepted: false
}

const userSeed = [
  {
    fname: "stephen",
    lname: "king",
    avatar: "https://via.placeholder.com/150",
    activities: [],
    goals: [],
    badges: [],
    challenges: [],
    friends: []
  },
  {
    fname: "william",
    lname: "golding",
    avatar: "https://via.placeholder.com/150",
    activities: [],
    goals: [],
    badges: [],
    challenges: [],
    friends: []
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

// seed activity test
db.Activity.create(seedAct)
  .then(function (dbActivity) {
    return db.User.findOneAndUpdate({ "fname": "stephen" }, { $push: { activities: dbActivity._id } }, { new: true });
  })
  .then(function (dbUser) {
    console.log(dbUser);
  })
  .catch(function (err) {
    console.log(err);
  });

//seed badge object
db.Badge.create(seedBadge)
  .then(function (dbBadge) {
    return db.User.findOneAndUpdate({ "fname": "stephen" }, { $push: { badges: dbBadge._id } }, { new: true });
  })
  .then(function (dbUser) {
    console.log(dbUser);
  })
  .catch(function (err) {
    console.log(err);
  });

//seed challenge object
db.Challenge.create(seedChallenge)
  .then(function (dbChallenge) {
    return db.User.findOneAndUpdate({ "fname": "stephen" }, { $push: { challenges: dbChallenge._id } }, { new: true });
  })
  .then(function (dbUser) {
    console.log(dbUser);
  })
  .catch(function (err) {
    console.log(err);
  });

//seed goal object
db.Goal.create(seedGoal)
  .then(function (dbGoal) {
    return db.User.findOneAndUpdate({ "fname": "stephen" }, { $push: { goals: dbGoal._id } }, { new: true });
  })
  .then(function (dbUser) {
    console.log(dbUser);
  })
  .catch(function (err) {
    console.log(err);
  });
