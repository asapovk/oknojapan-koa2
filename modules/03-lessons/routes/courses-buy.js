var Course = require('../models/course');
var Cart = require('../models/cart');

exports.post = async (ctx) => {
  var courseId = ctx.request.body.courseId;
/////////////////////////////////////
  var course = await Course.findById(courseId);
  var cart = new Cart(ctx.session.cart || {});

  if(!cart.add(course, courseId)) cart.remove(course, courseId);
  ctx.session.cart = cart;
  ctx.body = cart.totalQty;
/////////////////////////////////////
//  var cart = ctx.session.cart;
//  try {
//    var items = cart.items
//  } catch (e) {}

//  if(items) {
//    if(items.hasOwnProperty(courseId)) {
//      delete items[courseId];
//      cart.items = items;
//      ctx.session.cart = cart;
//      ctx.body = cart.totalQty;
//      return;
//    }
// }
////////////////////////////////////
//  var course = await Course.findById(courseId);
//  var cart = new Cart(ctx.session.cart ? ctx.session.cart : {});
//  cart.add(course, courseId);
//  ctx.session.cart = cart;
//  ctx.body = cart.totalQty;

}
