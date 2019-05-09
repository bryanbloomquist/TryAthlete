const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChallengeSchema = new Schema({
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
    },
    challenger: {
        type: Object,
        required: true
    },
    hasAccepted: {
        type: Boolean,
        required: true,
        default: false
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

const Challenge = mongoose.model("Goal", ChallengeSchema);

module.exports = Challenge;
