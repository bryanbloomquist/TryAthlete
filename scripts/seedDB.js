const mongoose = require("mongoose");
const db = require("../models");

// This file empties the users collection and inserts the users below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/tryathlete"
);

const userSeed = [
  {
    fname: "stephen",
    lname: "king",
    avatar: "https://via.placeholder.com/150"
  },
  {
    fname: "william",
    lname: "golding",
    avatar: "https://via.placeholder.com/150"
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
