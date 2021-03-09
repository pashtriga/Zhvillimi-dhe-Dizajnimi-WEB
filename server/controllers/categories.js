const Category = require('../models/categories');

exports.getSecrets = function(req,res){
  return res.json({secret:'I am secret message'})
}

exports.getCategories = function(req, res) {
  Category.find({})
        .exec((errors, categories) => {

    if (errors) {
      return res.status(422).send({errors});
    }

    return res.json(categories);
  });
}

exports.getCategoryByID = function(req, res) {
  const catID = req.params.id;
  Category.findById(catID,{})
        .exec((errors, category) => {

    if (errors) {
      return res.status(422).send({errors});
    }

    return res.json(category);
  });
}

exports.DeleteCategoryByID = function(req, res) {
  const autorID = req.params.id;
  Category.findByIdAndRemove(autorID,{})
        .exec((errors, categori) => {

    if (errors) {
      return res.status(422).send({errors});
    }

    return res.json(categori);
  });
}

exports.CreateCategory = function(req, res) {
  const CategoryData = req.body

  if(!CategoryData.name || CategoryData.name.length < 2)
  {
    return res.status(442).json({
      errors:{
        name:'is required',
        message:'Name is required'
      }
    })
  }

  const category = new Category(CategoryData)
  category.save((errors, categori) => {

    if (errors) {
      return res.status(422).send({
        errors:{
          lastname:'is required',
          message:'Lastname is required'
        }
      });
    }

    return res.json(categori);
  });
}

exports.EditCategoryByID = function(req, res) {
  const CategoryData = req.body
  const catID = req.params.id;

  if(!CategoryData.name || CategoryData.name.length < 2)
  {
    return res.status(442).json({
      errors:{
        name:'is required',
        message:'Name is required And minimum length is 2 character'
      }
    })
  }

  Category.findByIdAndUpdate(catID,CategoryData,function(errors,categori){
    if (errors) {
      return res.status(422).send({errors});
    }

    return res.json(categori);
  })

}


