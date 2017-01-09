module.exports = (req, res, next) => {
  if (req.isAuthenticated()) {
    res.render('blog', {
      title: 'Blog page',
      user: req.user.username
    });
  } else {
    res.redirect('/login');
  }

}
