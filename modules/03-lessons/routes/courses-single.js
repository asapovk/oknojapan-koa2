var Course = require('../models/course');

exports.get = async (ctx) => {
  var courseId = ctx.params.id;
  var course = await Course.findById(courseId);
  ctx.body = ctx.render('modules/03-lessons/templates/courses-single', {course: course});

}
