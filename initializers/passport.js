const passport = require('passport');
const LocalStrategy  = require('passport-local').Strategy;
const User = require('../models/user');


passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password'
}, (username, password, done) => {
  User.findOne({ username : username}, (err,user) => {
    console.log(user);
    return err
      ? done(err)
      : user
        ? password === user.password
          ? done(null, user)
          : done(null, false, { message: 'Incorrect password.' })
        : done(null, false, { message: 'Incorrect username.' });
  });
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    err
      ? done(err)
      : done(null, user);
  });
});

module.exports = passport;
