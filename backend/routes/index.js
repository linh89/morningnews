var express = require('express');
var router = express.Router();
var request = require('sync-request');
var mongoose = require('mongoose');
var usersModel = require("../models/users");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/sign-up', async function(req, res, next) {
  console.log(req.body)
  var newUsers = new usersModel({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  })
  var newUsersSave = await newUsers.save();

  var result = false
  if(newUsersSave){
    result = true
  }
  res.json({result: newUsersSave});
});

router.post('/sign-in', async function(req, res, next) {
  var searchUsers = await usersModel.findOne({
    email: req.body.email,
    password: req.body.password
  })

  var result = false
  if(searchUsers){
    result = true
  }
  res.json({result : searchUsers});
});

module.exports = router;
