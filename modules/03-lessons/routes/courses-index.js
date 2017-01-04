var Course = require('../models/course');

exports.get = async ctx => {
  var courses = await Course.find();
  ctx.body = ctx.render('modules/03-lessons/templates/courses-index', {courses: courses});
}
