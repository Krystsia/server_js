const User = require('../../models/user');

module.exports = (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  let user = new User({
    username: username,
    password: password
  });

  user.save((err) => {
    if(err) return next(err);
    req.logIn(user, (err) => {
      if(err) {
        req.session.user = user.username;
        return next(err);
      }
      res.redirect('/');
    });
  });
};
