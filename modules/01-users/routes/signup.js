const passport = require('koa-passport');
const User = require('../models/user');


exports.post = async function(ctx, next) {
  const verifyEmailToken = Math.random().toString(36).slice(2, 10);
    let user = new User({
      displayName: ctx.request.body.displayName,
      email: ctx.request.body.email.toLowerCase(),
      passwordHash: ctx.request.body.password,
      isVerified: false,
      verifyEmailToken: verifyEmailToken,
      group: 'free',
      salt: '123'
    });

  try {
  await user.save();
  } catch (err) {
    if(err.name === 'MongoError' && err.code === 11000){
        ctx.flash(error,'Имя пользователя или email уже занято');
    }
    ctx.redirect('/signup');
  }

  ctx.body = 'You are registerd successfully';


};
