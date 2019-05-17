const db = require("../models");

const object = function(object) {
  let count = Object.keys(object).length;
  let array = []
  let finalArray= []
  let date = Date.now();
  array.push(Object.values(object))
  for (let i = 0; i < count; i++) {
    finalArray.push(array[0][i])
  }
  finalArray.push(date)
  return(finalArray)
}

// Defining methods for the UsersController
module.exports = {

  //------------------------USERS---------------------
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

  remove: function (req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //------------------------ACTIVITIES---------------------
  addActivity: function (req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, { $push: { activities: [object(req.body)] } } )
      // .findOneAndUpdate({ _id: req.params.id }, { $push: { activities: { $each: [[req.body.sport, req.body.distance, req.body.units, Date.now()]] } } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeActivity: function (req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, { $pull: { goals: { "id" : parseInt(req.params.activityId) } } }, { safe: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //------------------------GOALS---------------------
  addGoal: function (req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, { $push: { goals: req.body } }, { new: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeGoal: function (req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, { $pull: { goals: { "id" : parseInt(req.params.goalId) } } }, { safe: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //------------------------CHALLENGES---------------------
  addChallenge: function (req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, { $push: { challenges: req.body } }, { new: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeChallenge: function (req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, { $pull: { challenges: { "id" : parseInt(req.params.challengeId) } } }, { safe: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //------------------------BADGES----------------------
  addBadge: function (req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, { $push: { badges: req.body } }, { new: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //------------------------FRIENDS---------------------
  addFriend: function (req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, { $push: { friends: req.body } }, { new: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeFriend: function (req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, { $pull: { friends: { "id" : parseInt(req.params.friendId) } } }, { safe: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }

};
