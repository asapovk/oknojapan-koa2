let User = require('../models/user');

exports.get = async (ctx) => {
  var userId = ctx.params.id;
  var user = await User.findById(userId);
  var authUser = ctx.state.user;
  console.log(user);
  ctx.body = ctx.render('modules/01-users/templates/user', {usr: user, authUser: authUser});
}
