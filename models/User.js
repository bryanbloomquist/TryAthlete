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
<<<<<<< HEAD
    type: Array,
    default: []
  },
  goals: {
    type: Array,
    default: []
  },
  badges: {
    type: Array,
    default: []
  },
  challenges: {
    type: Array,
    default: []
=======
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
>>>>>>> ff651ee4bc6d59446860812853a23f1d2d95c3b1
  },
  friends: {
    type: Array,
    default: []
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
