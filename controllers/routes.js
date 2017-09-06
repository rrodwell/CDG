/**
 * Created by ryanrodwell on 8/22/17.
 */
var express = require("express");
var router = express.Router();
var path = require("path");

router.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/UnderConstruction", function(req,res){
    res.sendFile(path.join(__dirname, "../public/underConstruction.html"));
});

router.get("/About", function(req, res){
    res.redirect("/UnderConstruction");
});

router.get("/Brands", function(req, res){
    res.redirect("/UnderConstruction");
});


router.get("/Payments", function(req, res){
    res.redirect("/UnderConstruction");
});

router.get("/Packages", function(req, res){
    res.sendFile(path.join(__dirname, "../public/packages.html"));
});

router.get("/Connect", function(req, res){
    res.sendFile(path.join(__dirname, "../public/connect.html"));
});



// Export routes for server.js to use.
module.exports = router;