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
    givenName: "stephen",
    familyName: "king",
    imageUrl: "https://via.placeholder.com/150",
    email: "www.google.com",
    activities: [
      {
        id: 23,
        sport: "Run",
        distanceQty: "50",
        distanceUnit: "km",
        duration: 50,
        createTime: date.getTime()
      }
    ],
    goals: [
      {
        id: 2,
        name: "Run 50 km in a week",
        sport: "Run",
        isAchieved: false,
        goalType: "distance",
        goalQty: 50,
        goalUnit: "km",
        goalTimeFrame: "this week",
        createTime: date.getTime(),
        progress: "20%"
      }
    ],
    badges: [
      {
        id: [1, 2, 5]
      }
    ],
    challenges: [
      {
        id: 25,
        name: "First goal",
        sport: "Run",
        isAchieved: false,
        goalType: "distance",
        goalQty: 50,
        goalUnit: "km",
        challenger: {
          id: 4
        },
        challengeTimeFrame: "this month",
        hasAccepted: false,
        createTime: date.getTime()
      }
    ],
    friends: {
      id: [
        1,
        4,
        6
      ]
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

