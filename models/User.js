const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  givenName: {
    type: String,
    required: true
  },
  familyName: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: true
  },
  activities: [{
    type: Schema.Types.ObjectId,
    ref: "Activity"
  }],
  goals: [{
    type: Schema.Types.ObjectId,
    ref: "Goal"
  }],
  badges: [{
    type: Schema.Types.ObjectId,
    ref: "Badge"
  }],
  challenges: [{
    type: Schema.Types.ObjectId,
    ref: "Challenge"
  }],
  friends: {
    type: Array,
    required: false
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
