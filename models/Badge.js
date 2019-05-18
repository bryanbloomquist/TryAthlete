const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BadgeSchema = new Schema({
    badgeId: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    src: {
        type: String,
        required: true
    },
    sport: {
        type: String,
        required: true
    },
    distanceQty: {
        type: Number,
        required: true
    },
    distanceUnit: {
        type: String,
        required: true
    },
    isAchieved: {
        type: Boolean,
        required: true,
        default: false
    },
});

const Badge = mongoose.model("Badge", BadgeSchema);

module.exports = Badge;
