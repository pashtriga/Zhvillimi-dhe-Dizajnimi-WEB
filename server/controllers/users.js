const User = require('../models/users');
const passport = require('passport');


exports.getUsers = function(req, res) {
  User.find({})
        .exec((errors, users) => {

    if (errors) {
      return res.status(422).send({errors});
    }

    return res.json(users);
  });
}

exports.getCurrentUser = function(req,res){
  const user = req.user;

  if(!user){
    return res.sendStatus(422);
  }
  return res.json(user);
};

exports.register = function(req,res){
  const registerData = req.body

  if(!registerData.email)
  {
    return res.status(442).json({
      errors:{
        email:'is required',
        message:'Email is required'
      }
    })
  }
  
  if(!registerData.password)
  {
    return res.status(442).json({
      errors:{
        password:'is required',
        message:'Password is required'
      }
    })
  }

  if(!registerData.passwordConfirmation)
  {
    return res.status(442).json({
      errors:{
        passwordConfirmation:'is required',
        message:'Password Confirmation is required'
      }
    })
  }

  if(registerData.password !== registerData.passwordConfirmation)
  {
    return res.status(442).json({
      errors:{
        password:'is not the same as confirmation password',
        message:'Password is not the same as confirmation password'
      }
    })
  }

  const user = new User(registerData);

 return user.save((errors,savedUser) => {
      if(errors){
        return res.status(422).json({errors:{
          UserDB:'Oops , something went wrong',
          message:'This user exist in our database'
        }})
      }
      return res.json(savedUser)
  })

}


exports.login = function(req,res,next){
  const { email ,password } = req.body

  if(!email)
  {
    return res.status(442).json({
      errors:{
        email:'is required',
        message:'Email is required'
      }
    })
  }
  
  if(!password)
  {
    return res.status(442).json({
      errors:{
        password:'is required',
        message:'Password is required'
      }
    })
  }

 return passport.authenticate('local',(err,passportUser)=>{
    if(err){
      next(err)
    }

    if(passportUser){
      req.login(passportUser,function(err){
        if(err){ next(err);}
        return res.json(passportUser)
      });

    }else{
      return res.status(422).send({errors:{
        authentication:'Oops , something went wrong',
        message:'This user does not exist'
      }})
    }

  })(req,res,next)
}


exports.logout = function(req,res){
  req.logout()
  return res.json({status:'Session destroyed'})
}