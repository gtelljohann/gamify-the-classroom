var express = require('express');
var router = express.Router();

router.use(function(req, res, next) {
  console.log('I here!')
  next();
})

// router.use('/clans', require('./clan'));
// router.use('/quests', require('./quest'));
// router.use('/users', require('./user'));



module.exports = router;