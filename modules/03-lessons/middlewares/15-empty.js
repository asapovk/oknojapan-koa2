const serve = require('koa-static');

exports.init = app => app.use(serve('modules/03-lessons/public'));
