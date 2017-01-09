var Cart = require('../models/cart');

exports.get = async (ctx) => {
  if(!ctx.session.cart) {
    return ctx.body = ctx.render('modules/03-lessons/templates/courses-cart', {courses: []});
  }

  var cart = new Cart(ctx.session.cart);

  console.log(cart.generateArray());
  ctx.body = ctx.render('modules/03-lessons/templates/courses-cart', {courses: cart.generateArray()});

}
