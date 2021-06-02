const express = require('express');
const router = express.Router();
const { Post } = require('../db/models');

router.get('/getpost', async (req, res, next) => {
    try {
        const posts = await Post.findAll(
          {where:
             {visibility: 'public' }}, {multi: true}
              );
        // An if/ternary statement to handle not finding allPlayers explicitly
        !posts
          ? res.status(404).send('post Not Found')
          : res.status(200).json(posts);
      } catch (error) {
        next(error);
      }
})


router.post('/createpost', async (req, res, next) => {
    try {
        const newPost = await Post.create(
            req.body
        );
        res.send(newPost)
    } catch (error){
        next (error)
    }
})


module.exports = router;