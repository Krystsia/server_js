const express = require('express');
const router = express.Router();
const config = require('../config');
const requireTree = require('require-tree');
const controllers = requireTree('../controllers');
const mustAuthenticatedMw = require('../middlewares/isAuth');

router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

router.get('/', controllers.main);

router.get('/admin', controllers.admin);

router.route('/login')
  .get(controllers.login)
  .post(controllers.api.login);
router.route('/register')
  .get(controllers.register)
  .post(controllers.api.register);

router.get('/logout', controllers.api.logout);

router.post('/addNewArticle', controllers.api.addArticle);
router.get('/getArticles', controllers.api.getArticles);


module.exports = router;
