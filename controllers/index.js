// Ovo je glavi controller file - u njemu ucitavamo sve druge kontrolere
// Ovaj glavni controller kasnije pozivamo u app.js da bi sve ostale aktivirali

var express = require("express");
var router = express.Router();

router.use("/users", require("./users")); // Ucitavamo controller


module.exports = router;
