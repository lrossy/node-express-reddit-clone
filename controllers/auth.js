var express = require('express');

module.exports = function(myReddit) {
    var authController = express.Router();
    
    authController.get('/login', function(request, response) {
      response.render('signup-form');
    });
    
    authController.post('/login', function(request, response) {
      // myReddit.createUser().then( user => {
      //
      // }).catch( err => {
      //   response.render('error', {error: err});
      // });
    });
    
    authController.get('/signup', function(request, response) {
      response.render('signup-form');
    });
    
    authController.post('/signup', function(request, response) {
      myReddit.createUser().then( user => {

      }).catch( err => {
        response.render('error', {error: err});
      });
     });
    
    return authController;
}