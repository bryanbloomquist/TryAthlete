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
    activities: [
      {
        id: 23,
        sport: "Running",
        distanceMeasurement: "50",
        distanceUnit: "km",
        time: 50
      }
    ],
    goals: [
      {
        id: 2,
        description: "Run 50 km in a week",
        name: "First goal",
        sport: "running",
        isAchieved: false,
        goalType: "distance",
        goalQuant: 50
      }
    ],
    badges: [
      {
        id: 54,
        isEarned: false,
        description: "Long Run Fastly",
        name: "Long Runner Badge",
        sport: "Running"
      }
    ],
    challenges: [
      {
        id: 25,
        name: "First goal",
        sport: "running",
        isAchieved: false,
        goalType: "distance",
        goalQuant: 50,
        challenger: "Jim",
        hasAccepted: false
      }
    ],
    friends: [
      "Jeff",
      "William",
      "Cindy"
    ]
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

