const mongoose = require("mongoose");
const db = require("../models");
const date = new Date();

// This file empties the badges collection and inserts the badges below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/tryathlete"
);

//badge seed
const badgeSeed = [
    {
      badgeId: 1,
      name: "Marathon Man",
      description: "Run 26 miles.",
      src: "marathon",
      sport: "Run",
      distanceQty: 26,
      distanceUnit: "mi",
      isAchieved: false
    },
    {
      badgeId: 2,
      name: "Grand Canyon",
      description: "Run 277 miles.",
      src: "grandcanyon",
      sport: "Run",
      distanceQty: 277,
      distanceUnit: "mi",
      isAchieved: false
    },
    {
      badgeId: 3,
      name: "Run to Mordor",
      description: "Run 1,350 miles.",
      src: "mordor",
      sport: "Run",
      distanceQty: 1350,
      distanceUnit: "mi",
      isAchieved: false
    },
    {
      badgeId: 4,
      name: "Forrest Gump",
      description: "Run 2,680 miles.",
      src: "gump",
      sport: "Run",
      distanceQty: 2680,
      distanceUnit: "mi",
      isAchieved: false
    },
    {
      badgeId: 5,
      name: "English Channel",
      description: "Swim 21 miles.",
      src: "engchn",
      sport: "Swim",
      distanceQty: 21,
      distanceUnit: "mi",
      isAchieved: false
    },
    {
      badgeId: 6,
      name: "Cuba to Miami",
      description: "Swim 330 miles.",
      src: "miami",
      sport: "Swim",
      distanceQty: 330,
      distanceUnit: "mi",
      isAchieved: false,
    },
    {
      badgeId: 7,
      name: "Mississippi River",
      description: "Swim 2,348 miles.",
      src: "mississippi",
      sport: "Swim",
      distanceQty: 2348,
      distanceUnit: "mi",
      isAchieved: false
    },
    {
      badgeId: 8,
      name: "You're in de'Nile'",
      description: "Swim 4,132 miles.",
      src: "nile",
      sport: "Swim",
      distanceQty: 4132,
      distanceUnit: "mi",
      isAchieved: false
    },
    {
      badgeId: 9,
      name: "Bike Around Pluto'",
      description: "Bike 1,467 miles.",
      src: "pluto",
      sport: "Bike",
      distanceQty: 1467,
      distanceUnit: "mi",
      isAchieved: false
    },
    {
      badgeId: 10,
      name: "Oregon Trail",
      description: "Bike 2,170 miles.",
      src: "oregontrail",
      sport: "Bike",
      distanceQty: 2170,
      distanceUnit: "mi",
      isAchieved: false
    },
    {
      badgeId: 11,
      name: "Tour de France",
      description: "Bike 2,200 miles.",
      src: "france",
      sport: "Bike",
      distanceQty: 2200,
      distanceUnit: "mi",
      isAchieved: false
    },
    {
      badgeId: 12,
      name: "Great Wall of China",
      description: "Bike 13,170 miles.",
      src: "greatwall",
      sport: "Bike",
      distanceQty: 13170,
      distanceUnit: "mi",
      isAchieved: false
    }
];

db.Badge
  .remove({})
  .then(() => db.Badge.collection.insertMany(badgeSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
