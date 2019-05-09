const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  fname: {
    type: String,
    required: true
  },
  lname: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: false
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
