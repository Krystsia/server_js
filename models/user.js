const mongoose = require('mongoose');
const crypto = require('crypto');

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    unique: true
  }
});

// BloggerSchema.methods.encryptPassword =
//   (password) => crypto.createHmac('sha256', this.salt).update(password).digest('hex');
//
// BloggerSchema.methods.checkPassword =
//   (password) => BloggerSchema.methods.encryptPassword(password) === this.hashedPassword;
//
//
//   BloggerSchema.virtual('password').set((password) => {
//     this._plainPassword = password;
//     this.salt = Math.random().toString();
//     this.hashedPassword = BloggerSchema.methods.encryptPassword(password);
//   });
//   BloggerSchema.virtual('password').get(() => this._plainPassword);

module.exports = mongoose.model('User', UserSchema);
