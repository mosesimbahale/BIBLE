const express = require("express");
 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const bibleRoutes = express.Router();
 
// This will help us connect to the database
// get driver connection
const connectDB = require('../db/conn');
connectDB();
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
 
// This section will help you get a list of all the records.
bibleRoutes.route("/bible").get(function (req, res) {
 const db = connectDB(); 

  dbo.collection("bible").find({}).toArray(function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }

  });
});

// This section will help you get a list of all the records.


 


 


module.exports = bibleRoutes;