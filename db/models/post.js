const Sequelize = require('sequelize');
const db = require('../db');

//Sample Model  Read More At https://sequelize.org/master/manual/model-basics.html

const Post = db.define('post', {
  postText: {
    type: Sequelize.STRING,
    allowNull: false
  },
  date: {
    type: Sequelize.STRING,
    allowNull: false
  },
  visibility: {
    type: Sequelize.STRING,
    allowNull: false
  },
  user: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

module.exports = Post;