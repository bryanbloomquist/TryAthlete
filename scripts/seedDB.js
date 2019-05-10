const mongoose = require("mongoose");
const db = require("../models");

// This file empties the users collection and inserts the users below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/tryathlete"
);

//user seed
const userSeed = [
  {
    givenName: "stephen",
    familyName: "king",
    imageUrl: "https://via.placeholder.com/150",
    email: "www.google.com",
    activities: [],
    goals: [],
    badges: [],
    challenges: [],
    friends: []
  },
  {
    givenName: "william",
    familyName: "golding",
    imageUrl: "https://via.placeholder.com/150",
    email: "www.yahoo.com",
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

