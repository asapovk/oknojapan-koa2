let passport = require('koa-passport');
let LocalStrategy = require('passport-local');
let User = require('../models/user');

// DOES NOT WORK!!!
exports.get = async function (ctx, next) {
  var email = ctx.req.params.email;
  var token = ctx.req.params.token;
  var user = User.find({email: email});
  if(user.token === token)
  var confirmedUser = user;
  confirmedUser.isConfirmed = true;
   Object.assign(user, confirmedUser);
    await user.save();
    ctx.body = 'Email is confirmed now';
};
