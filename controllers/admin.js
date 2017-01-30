module.exports = (req, res, next) => {
  if (req.isAuthenticated()) {
    res.render('admin', {
      user: req.user.username
    });
  } else {
    res.redirect('/login');
  }
}
