module.exports = (req, res, next) => {
  if (req.isAuthenticated()) {
    res.render('ng', {
      title: 'National Geographic News',
      user: req.user.username
    });
  } else {
    res.redirect('/login');
  }
}
