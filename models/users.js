var database = require("../database/");
var ObjectID = database.ObjID;

module.exports = {

  // Create user
  create: (user, callback) => {
    database.db.collection("users").insertOne(user, (err) => {
      if(err) return console.log(err);
      callback();
    });
  },
  // Delete user
  delete: (user, callback) => {
    database.db.collection("users").remove(user, (err) => {
      if(err) return console.log(err);
      callback();
    })
  },
  // Get all users
  getAll: (callback) => {
    database.db.collection("users").find().toArray((err, result) => {
      if(err) return console.log(err);
      callback(result);
    });
  },
  // Get an user by ID
  getOne: (ID, callback) => {
    var user = { _id: new ObjectID(ID) }
    database.db.collection("users").findOne(user, (err, result) => {
      if(err) return console.log(err);
      callback(result);
    });
  },
  // Update an user
  update: (ID, updatedUser, callback) => {
    var user = { _id: new ObjectID(ID)}
    database.db.collection("users").update(user, {$set:updatedUser}, (err) => {
      if(err) console.log(err);
      callback();
    });
  }

}
