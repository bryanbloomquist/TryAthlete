const mongoose = require("mongoose");
const db = require("../models");
const date = new Date();

// This file empties the Badge collection and inserts the Badges below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/tryathlete"
);

//badge seed
const badgeSeed = [
    {
        marathon: {
            level: 1,
            name: "Marathon Man",
            description: "Run 26 miles.",
            src: "../images/badges/marathon.png",
            sport: "Run",
            distanceQty: "26",
            distanceUnit: "mi",
            isAchieved: false,
        }
    },
    {
        grandcanyon: {
            level: 2,
            bName: "Grand Canyon",
            description: "Run 277 miles.",
            src: "../images/badges/grandcanyon.png",
            sport: "Run",
            distanceQty: "277",
            distanceUnit: "mi",
            isAchieved: false,
        }
    },
    {
        mordor: {
            level: 3,
            name: "Run to Mordor",
            description: "Run 1,350 miles.",
            src: "../images/badges/mordor.png",
            sport: "Run",
            distanceQty: "1350",
            distanceUnit: "mi",
            isAchieved: false,
        }
    },
    {
        gump: {
            level: 4,
            name: "Forrest Gump",
            description: "Run 2,680 miles.",
            src: "../images/badges/gump.png",
            sport: "Run",
            distanceQty: "2680",
            distanceUnit: "mi",
            isAchieved: false,
        }
    },
    {
        englishchannel: {
            level: 1,
            name: "English Channel",
            description: "Swim 21 miles.",
            src: "../images/badges/engchn.png",
            sport: "Swim",
            distanceQty: "21",
            distanceUnit: "mi",
            isAchieved: false,
        }
    },
    {
        miami: {
            level: 2,
            name: "Cuba to Miami",
            description: "Swim 330 miles.",
            src: "../images/badges/miami.png",
            sport: "Swim",
            distanceQty: "330",
            distanceUnit: "mi",
            isAchieved: false,
        }
    },
    {
        mississippi: {
            level: 3,
            name: "Mississippi River",
            description: "Swim 2,348 miles.",
            src: "../images/badges/mississippi.png",
            sport: "Swim",
            distanceQty: "2348",
            distanceUnit: "mi",
            isAchieved: false,
        }
    },
    {
        nile: {
            level: 4,
            name: "You're in de'Nile'",
            description: "Swim 4,132 miles.",
            src: "../images/badges/nile.png",
            sport: "Swim",
            distanceQty: "4132",
            distanceUnit: "mi",
            isAchieved: false,
        }
    },
    {
        pluto: {
            level: 1,
            name: "Bike Around Pluto'",
            description: "Bike 1,467 miles.",
            src: "../images/badges/pluto.png",
            sport: "Bike",
            distanceQty: "1467",
            distanceUnit: "mi",
            isAchieved: false,
        }
    },
    {
        oregon: {
            level: 2,
            name: "Oregon Trail",
            description: "Bike 2,170 miles.",
            src: "../images/badges/oregontrail.png",
            sport: "Bike",
            distanceQty: "2170",
            distanceUnit: "mi",
            isAchieved: false,
        }
    },
    {
        france: {
            level: 3,
            name: "Tour de France",
            description: "Bike 2,200 miles.",
            src: "../images/badges/france.png",
            sport: "Bike",
            distanceQty: "2200",
            distanceUnit: "mi",
            isAchieved: false,
        }
    },
    {
        china: {
            level: 4,
            name: "Great Wall of China",
            description: "Bike 13,170 miles.",
            src: "../images/badges/greatwall.png",
            sport: "Bike",
            distanceQty: "13170",
            distanceUnit: "mi",
            isAchieved: false,
        }
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