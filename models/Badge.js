const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BadgeSchema = new Schema({
    isReached: {
        type: Boolean,
        required: true
    },
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
    imgSrc: {
        type: String,
        required: true
    }

});

const Badge = mongoose.model("Badge", BadgeSchema);

module.exports = Badge;
