const mongoose = require('mongoose');
const Author = require('./models/authors');
const User = require('./models/users');
const Movie = require('./models/movies');
const Category = require('./models/categories')

const data = require('./data.js');
const config = require('./config/dev');

class DB {
  constructor() {
    this.authors = data.authors;
    this.categories = data.categories;
    this.users = data.users;
    this.movies = data.movies;
    this.categories = data.categories;
    this.models = [Author, User, Movie, Category];
  }

  async cleanDb() {
     for ( let model of this.models ) {
      await model.deleteMany({}, () => {})
      console.log(`Data for model ${model.collection.collectionName} Deleted!`)
    }
  }

  async pushDataToDb() {
    await this.categories.forEach(async (category) => {
       const newCategory = new Category(category);
       await newCategory.save(() => {});
    })

    await this.authors.forEach(async author => {
      await (new Author(author)).save(() => {})
    })

    await this.users.forEach(async user => {
      await (new User(user)).save(() => {})
    })

    await this.movies.forEach(async movie => {
      await (new Movie(movie)).save(() => {})
    })

    console.log('Database Populated!');
  }

  async seedDb() {
    await this.cleanDb();
    await this.pushDataToDb();
  }
}

mongoose.connect(config.DB_URI, { useNewUrlParser: true })
  .then(async () => {
    const db = new DB();
    await db.seedDb();
    console.log('You can close connection now!')
  })
  .catch(err => console.log(err));
