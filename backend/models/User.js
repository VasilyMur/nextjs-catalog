const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

//const md5 = require('md5');
const validator = require('validator');
//const isEmail = require('validator/lib/isEmail');

const mongodbErrorHandler = require('mongoose-mongodb-errors');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    //validate: [validator.isEmail, 'Неправильный формат email'],
    validate: [{  isAsync: false, validator: validator.isEmail, msg: 'Неправильный формат email' }],
    required: 'Введите email'
  },
  name: {
      type: String,
      required: 'Please supply a name',
      trim: true
  },
//   courses: [
//     // Courses is an array of IDs related to different Courses
//     // This is ARRAY of Objects (not IDs)
//     { type: mongoose.Schema.ObjectId, ref: 'Course'}
//   ],
  // payment: {
  //   type: Boolean,
  //   default: false
  // },
//   resetPasswordToken: String,
//   resetPasswordExpires: Date,
});

//Use mongoose virtual field to generate a temp. field to the model and show gravatar
// virtual fields are not actually stored in the database
//MD5 is used to hash the email
// userSchema.virtual('gravatar').get(function() {
//   const hash = md5(this.email);
//   return `https://gravatar.com/avatar/${hash}?s=200`;
// });


//Login - create authentication for our model with all the fields and methods. Use email as login
// Passport Local Mongoose - Provides the method called .register (instead of save) -> DOESN'T RETURN a PROMISE!!
userSchema.plugin(passportLocalMongoose, { usernameField: 'email' })
// change mongodb ugly errors to a nicer version
userSchema.plugin(mongodbErrorHandler);


module.exports = mongoose.model('User', userSchema);