const passport = require('../../initializers/passport');
const User = require('../../models/user');

module.exports = (req, res, next) => {
  passport.authenticate('local',
   function(err, user, next) {
     if(err) return next(err);
     if(user) {
       req.logIn(user, function(err) {
         if (err) return next(err);
         res.redirect('/');
       })
     } else {
       res.redirect('/register');
     }
   }
 )(req, res, next);
};
