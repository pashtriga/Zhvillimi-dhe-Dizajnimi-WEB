const Author = require('../models/authors');

exports.getAuthors = function(req, res) {
  Author.find({})
        .exec((errors, authors) => {

    if (errors) {
      return res.status(422).send({errors});
    }

    return res.json(authors);
  });
}


exports.getAuthorByID = function(req, res) {
  const autorID = req.params.id;
  Author.findById(autorID,{})
        .exec((errors, authors) => {

    if (errors) {
      return res.status(422).send({errors});
    }

    return res.json(authors);
  });
}


exports.DeleteAuthorByID = function(req, res) {
  const autorID = req.params.id;
  Author.findByIdAndRemove(autorID,{})
        .exec((errors, categori) => {

    if (errors) {
      return res.status(422).send({errors});
    }

    return res.json(categori);
  });
}

exports.CreateAuthor = function(req, res) {
  const AuthorData = req.body

  if(!AuthorData.name)
  {
    return res.status(442).json({
      errors:{
        name:'is required',
        message:'Name is required'
      }
    })
  }
  if(!AuthorData.lastname)
  {
    return res.status(442).json({
      errors:{
        lastname:'is required',
        message:'Lastname is required'
      }
    })
  }
  if(!AuthorData.discription)
  {
    return res.status(442).json({
      errors:{
        discription:'is required',
        message:'Discription is required'
      }
    })
  }

  const autori = new Author(AuthorData);

 return autori.save((errors,savedAuthor) => {
      if(errors){
        return res.status(422).json({errors:{
          UserDB:'Oops , something went wrong',
          message:'This author exist in our database'
        }})
      }
      return res.json(savedAuthor)
  })

}



