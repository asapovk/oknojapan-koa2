exports.get = async (ctx) => {
  ctx.session.cart = {};
  ctx.redirect('/courses?courses=all');
  ctx.body = 'Hou';
}
