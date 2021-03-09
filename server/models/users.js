const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 //const jwt = require('jsonwebtoken')
 const bcrypt = require('bcrypt')
// const config = require('../config/dev')

const userSchema = new Schema({

  email: { type: String,
           required: 'Email is Required',
           lowercase: true,
           unique: true,
         //  match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
         },
  username: { type: String,
          required: true,
          minlength: [6, 'Too short, min is 6 characters']},
  password: {
    type: String,
    minlength: [4, 'Too short, min is 4 characters'],
    maxlength: [32, 'Too long, max is 32 characters'],
    required: 'Password is required'
  }

});


userSchema.pre("save", function(next){
   const user = this;

   bcrypt.genSalt(10, function(err, salt) {
      if(err){ return next(err);}

      bcrypt.hash(user.password, salt, function(err, hash){
          if(err){ return next(err);}

          user.password = hash;
          next();
      });
   });
});

//Every user have acces to this methods
userSchema.methods.comparePassword = function(candidatePassword, callback){
   bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
      if(err) {return callback(err);}

      callback(null, isMatch);
   });
}


module.exports = mongoose.model('User', userSchema );
