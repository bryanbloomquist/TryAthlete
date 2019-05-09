const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GoalSchema = new Schema({
    desciption: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    sport: {
        type: String,
        required: true
    },
    isAchieved: {
        type: Boolean,
        required: true,
        default: false
    },
    goalType: {
        type: String,
        required: true
    },
    goalQuant: {
        type: Number,
        required: true
    }
    // ,goalDate: {
    //     type: Date,
    //     required: true
    // },
    // dateEntered: {
    //     type: Date,
    //     required: true,
    //     default: Date.now
    // },
    // dateCompleted: {
    //     type: Date,
    //     required: false
    // }

});

const Goal = mongoose.model("Goal", GoalSchema);

module.exports = Goal;
