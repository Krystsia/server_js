module.exports = (req, res, next) =>{
  res.render('login', {
    title: 'Login page',
    categories: ['The BBC News', 'National Geographic News', 'Other'],
  });
}
