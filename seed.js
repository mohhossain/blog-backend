const {Post} = require('./db/models');


const post = [
  { postText: 'Test', date: Date(), visibility: 'public', user: 'admin'},
];

const seed = () => {
  return Post.bulkCreate(post);
};

console.log('seeding')
seed().then(() => process.exit());

module.exports = seed;
