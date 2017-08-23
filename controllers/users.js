// Controller - obradjujemo route i koristimo modele da bi menjali podatke u DB


var express = require("express");
var router  = express.Router();

var users   = require("../models/users");

router.post("/create", (req, res, next) => {
  var user = req.body;
  users.create(user, () => {
      res.json(user);
  });

});

router.delete("/delete", (req, res, next) => {
  var user = req.body;
  users.delete(user, () => {
    res.json(user);
  });

});

router.get("/", (req, res, next) => {
  users.getAll((all) => {
    res.json(all); // all is callback return value
  });
});

router.get("/:ID", (req, res, next) => {
    var data = req.params.ID;
    users.getOne(data, (user) => {
      res.json(user);
    });
});

router.put("/update/:ID", (req, res, next) => {
    var ID = req.params.ID;
    var data = req.body;
    users.update(ID, data, (result) => {
      console.log("User updated!");
    })
});


module.exports = router; // Export all routes
