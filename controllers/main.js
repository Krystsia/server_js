module.exports = (req, res, next) => {
  if (req.isAuthenticated()) {
    res.render('index', {
      title: 'Last News',
      user: req.user.username
    });
  } else {
    res.redirect('/login');
  }
}
