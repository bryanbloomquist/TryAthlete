const mongoose = require("mongoose");
const db = require("../models");
const date = new Date();

// This file empties the users collection and inserts the users below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/tryathlete"
);

//user seed
const userSeed = [
  {
    id: "1",
    givenName: "steve",
    familyName: "rogers",
    imageUrl: "https://fanfest.com/wp-content/uploads/2018/10/captain-america-figure_0-632x450.png",
    email: "captain@gmail.com",
    activities: [],
    badges: [
      {
        id: [1, 2, 5]
      }
    ],
    challenges: [],
    friends: {
      id: []
    }
  },
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

