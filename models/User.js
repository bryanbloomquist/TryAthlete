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
  activities: {
    type: Array,
    required: false
  },
  goals: {
    type: Array,
    required: false
  },
  badges: {
    type: Array,
    required: false
  },
  challenges: {
    type: Array,
    required: false
  },
  friends: {
    type: Array,
    required: false
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
