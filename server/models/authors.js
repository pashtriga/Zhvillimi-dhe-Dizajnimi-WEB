const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
  name: { type: String, required: true,
         minlength: [2, 'Too short, min is 2 characters'],
          maxlength: [512, 'Too long, max is 512 characters']},
  lastname: { type: String, required: true, 
        maxlength: [512, 'Too long, max is 512 characters']},
  discription: { type: String, required: true}
});

module.exports = mongoose.model('Author', authorSchema );