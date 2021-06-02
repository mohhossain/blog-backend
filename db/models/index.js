const Post = require('./post');
const User = require('./user');
//ASSOICATIONS GO HERE -- Read more at https://sequelize.org/master/manual/assocs.html

Post.belongsTo(User, {
        foreignKey: 'userName',
        as: 'User', // Changes applied here
});

module.exports = {
  Post,
  User
};