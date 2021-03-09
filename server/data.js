const moment = require('moment');
const mongoose = require('mongoose');

const user1Id = mongoose.Types.ObjectId();
const user2Id = mongoose.Types.ObjectId();
const user3Id = mongoose.Types.ObjectId();

const author1Id = mongoose.Types.ObjectId();
const author2Id = mongoose.Types.ObjectId();
const author3Id = mongoose.Types.ObjectId();
const author4Id = mongoose.Types.ObjectId();

const category1Id = mongoose.Types.ObjectId();
const category2Id = mongoose.Types.ObjectId();
const category3Id = mongoose.Types.ObjectId();
const category4Id = mongoose.Types.ObjectId();
const category5Id = mongoose.Types.ObjectId();

const movie1Id = mongoose.Types.ObjectId();
const movie2Id = mongoose.Types.ObjectId();
const movie3Id = mongoose.Types.ObjectId();

module.exports = {
 
  "users": [
    {
      "_id": user1Id,
      "email": "meti@test.com",
      "username": "Meti5",
      "password": "testtest"
    },
    {
      "_id": user2Id,
      "email": "admin@test.com",
      "username": "Gallapeni5",
      "password": "testtest"
    },
    {
      "_id": user3Id,
      "email": "test@test.com",
      "username": "Testimi",
      "password": "testtest"
    }
  ],
  "authors": [
    {
      "_id": author1Id,
      "name": "Raymond",
      "lastname": "Reddington",
      "discription": "Shkrimtar shqiptar"
    },
    {
      "_id": author2Id,
      "name": "Blake",
      "lastname": "Schofield",
      "discription": "Shkrimtar shqiptar"
    },
    {
      "_id": author3Id,
      "name": "Will",
      "lastname": "Smith",
      "discription": "Shkrimtar shqiptar"
    },
    {
      "_id": author4Id,
      "name": "Adem",
      "lastname": "Jashari",
      "discription": "Shkrimtar shqiptar"
    }
  ],
  "movies": [
    {
      "_id": movie1Id,
      "title": "Blacklist",
      "relase": moment().toISOString(),
      "image": "https://theglobalcoverage.com/wp-content/uploads/2020/02/the-blacklist.jpg",
      "author": author1Id,
      "category": category3Id
    },
    {
      "_id": movie2Id,
      "title": "Bay Boy 3",
      "relase": moment().toISOString(),
      "image": "https://honknews.com/wp-content/uploads/2020/02/650x650_c3dae6258b343aee32b163fa28f43042bca74dc3ce6fb7e9d8b69d38.jpg",
      "author": author3Id,
      "category": category1Id
    },
    {
      "_id": movie3Id,
      "title": "1917",
      "relase": moment().toISOString(),
      "image": "https://indonesiaexpat.biz/wp-content/uploads/2020/02/1917-movie-review-2.jpg",
      "author": author2Id,
      "category": category4Id
    }
    
  ],
  "categories": [
    {
      "_id": category1Id,
      "name": "Action",
    },{
      "_id": category2Id,
      "name": "Dram",
      },
    {
      "_id": category3Id,
      "name": "Crim",
    },
    {
      "_id": category4Id,
      "name": "Luft",
    },
    {
      "_id": category5Id,
      "name": "Comedy",
    }
  ]
};
