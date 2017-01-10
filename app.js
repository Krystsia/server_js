const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const config = require('./config');
const session = require('express-session');
const mongoose = require('mongoose');
const passport = require('./initializers/passport');
const root = process.env.PWD;
const app = express();
const router = require('./routes');
const fileUpload = require('express-fileupload');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(fileUpload());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const MongoStore = require('connect-mongo')(session);

app.use(session({
  secret: config.get('session:secret'),
  key: config.get('session:key'),
  cookie: config.get('session:cookie'),
  store: new MongoStore({
     mongooseConnection: mongoose.connection
  }),
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());



app.use(express.static(path.join(root, 'public')));

app.use('/', router)
// app.get(router);


//  error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
