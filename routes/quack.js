
/*
 * POST Quack
 */

exports.quack = function(req, res){
  var quack = req.body.quack;
  var Firebase = require('firebase');
  var quackRef = new Firebase('https://quacker.firebaseio.com/quacks');
  quackRef.push({'quack': quack});
  res.send(200);
};