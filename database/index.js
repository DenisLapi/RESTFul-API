var mongoDatabase = require("mongodb").MongoClient;
var objectID = require("mongodb").ObjectID;

var connect = {
  URL: 'mongodb://localhost:27017/Model-View-Controller',
  ObjID: objectID
}

mongoDatabase.connect(connect.URL, (err, db) => {
  if(err) console.log(err);
  connect.db = db;
});

module.exports = connect;
