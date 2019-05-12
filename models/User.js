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
    type: Array, "default": []
  },
  goals: {
    type: Array, "default": []
  },
  badges: {
    type: Array, "default": []
  },
  challenges: {
    type: Array, "default": []
  },
  friends: {
    type: Array,
    required: false
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
