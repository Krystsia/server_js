const nconf = require('nconf');
const path = require('path');

nconf.argv()
  .env()
  .file({ file: path.join(__dirname,'config.json' ) });

module.exports = nconf;
//  mongodb://krystsia:1111@ds157298.mlab.com:57298/it-news
