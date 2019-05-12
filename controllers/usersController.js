const db = require("../models");


// Defining methods for the UsersController
module.exports = {
  findAll: function (req, res) {
    db.User
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //is this how we are going to add to our db?
  addActivity: function (req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, { $push: { activities: req.body } }, { new: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeActivity: function (req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, { $pull: { activities: { id: req.params.activityId } } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  addGoal: function (req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, { $push: { goals: req.body } }, { new: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  addChallenge: function (req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, { $push: { challenges: req.body } }, { new: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  addFriend: function (req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, { $push: { friends: req.body } }, { new: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
