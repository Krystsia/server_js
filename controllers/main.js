module.exports = (req, res, next) => {
  if (req.isAuthenticated()) {
    res.render('index', {
      user: req.user.username
    });
  } else {
    res.redirect('/login');
  }
}
