const mongoose = require('mongoose');
require('../models/User');
const User = mongoose.model('User');
mongoose.Promise = global.Promise;

// Express Validator  - Register form validation Middleware
exports.validateRegister = (req, res, next) => {
    req.sanitizeBody('name');
    req.checkBody('name', 'Name required!').notEmpty();
    req.checkBody('email', 'Email not valid!').isEmail();
    req.sanitizeBody('email').normalizeEmail({
      remove_dots: false,
      remove_extension: false,
      gmail_remove_subaddress: false
    });
    req.checkBody('password', 'Password required!').notEmpty();
    req.checkBody('confirm', 'Password confirmation required!').notEmpty();
    req.checkBody('confirm', 'Passwords dont match!').equals(req.body.password);
  
    const errors = req.validationErrors();
    if (errors) {
        //Errors actual message not visible on the client
        errors.map(err => res.status(400).send(err.msg));
        return;
    }
    next(); //there were no errors
  };


  // We successfully pass above form Validation -> req.body contains all form Data
exports.register = async (req, res, next) => {
    try {
      const user = new User({ email: req.body.email, name: req.body.name });
      // user .Register method to Add Password, hash it and save EVERYTHING (email, name, pass(its hash)) to the DB
      // .Register comes from passportLocalMongoose plugin - on our User model
      // .Register DOESNOT return a Promise and requires a callback-> thus we promisify it!!

      await User.register(user, req.body.password);
      next();
  
    } catch(e) {
      if (e.name == 'UserExistsError') {
        return res.status(400).send('User already Exists');
      } else {
        return res.status(400).send('Something went wrong');
      }
    };
  };