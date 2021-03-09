const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: { type: String, required: true, 
        maxlength: [512, 'Too long, max is 512 characters']},
  relase: { type: Date, default: Date.now },
  image: { type: String }, 
  author: { type: Schema.Types.ObjectId, ref: 'Author' },
  category: [{ type: Schema.Types.ObjectId, ref: 'Category' }]
});

module.exports = mongoose.model('Movie', movieSchema );