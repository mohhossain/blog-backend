const bodyParser = require('body-parser');
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


router.post('/createpost', bodyParser.json(), async (req, res, next) => {
    console.log("params" , req.body)
    try {
        const post = await Post.create(
            {postText: req.body.postText, date: Date(), visibility: req.body.visibility, user: req.body.user}
        );
        res.send("Post created: ", post)
    } catch (error){
        next (error)
    }
})

router.put('/vis/:id/:visibility', async (req, res, next) => {
    console.log(req.params);
    try{
        const post = await Post.update(
            {visibility: req.params.visibility},
            {where: {id: req.params.id}},
            {multi: true}
        )
        res.send (post)
    } catch(error){
        next(error);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
      await Post.destroy({where:{id: req.params.id}}, {multi: true} 
    )
    res.send('Post deleted')
    } catch (error) {
      next(error);
    }
  });


module.exports = router;