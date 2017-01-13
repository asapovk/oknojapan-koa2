var Course = require('../models/course');
exports.get = async ctx => {
  try {
    var coursesType = ctx.request.query.courses;
  } catch (e) {}
  if (coursesType == undefined) {
       ctx.redirect('/courses?courses=all');
  }
  var courses = [];
  if (coursesType === 'all') {
    courses = await Course.find();
    console.log(coursesType);
  }
  else {
    courses = await Course.find({type: coursesType});
  }
   console.log(ctx.session.cart);

  ctx.body = ctx.render('modules/03-lessons/templates/courses-index', {courses: courses, cart: ctx.session.cart});
}
