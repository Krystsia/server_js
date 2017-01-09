module.exports = (req, res, next) => {
  res.render('register', {
    title: 'register page',
    categories: ['The BBC News', 'National Geographic News', 'Other'],
  });
}
