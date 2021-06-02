const router = require('express').Router();
module.exports = router;


router.use('/post', require('./posts'));

//Anythingn not found gets a 404
router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});