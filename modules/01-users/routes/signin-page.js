exports.get = async function(ctx, next) {
  if (ctx.isAuthenticated()) {
    ctx.redirect('/');
  } else {
    ctx.body = ctx.render('modules/01-users/templates/signin');
  }

};
