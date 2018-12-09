// Passport - Actually Allows to LOG user in after form validation and .register of User to DB
// Passport - configured in the ./handlers/passport
// Passport - no need to deal with cookies and sessions
const mongoose = require('mongoose');
const passport = require('passport');
require('../models/User');
const User = mongoose.model('User');
// crypto - part of nodejs - no need to install
//const crypto = require('crypto');
//const promisify = require('es6-promisify');
//const mail = require('../handlers/mail');


//Using Passport Middleware - strategy name: local, and pass it our options
exports.login = passport.authenticate('local', {
  failureRedirect: '/login',
  //failureFlash: 'Failed login!',
  successRedirect: '/add',
  //successFlash: 'Успешный логин!'
})

 

// Check if the user is logged in - and apply the rule to the routes that need authentication
exports.isLoggedIn = (req, res, next) => {
    // 1) PASSPORT method - Check if the user is authenticated
    console.log('CHECKING.....')
    if(req.isAuthenticated()) {
      console.log('CHECKING.....SUCCESS')
      next() //carry on! they are logged in!
      return;
    };
    console.log('CHECKING.....FAIL!!')
    res.status(500).send('You have to be logged in!!');
 
  };

// Logout
exports.logout = (req, res) => {
    console.log('log out')
    req.logout();
    req.session.destroy();
    //res.redirect('/');
  };

