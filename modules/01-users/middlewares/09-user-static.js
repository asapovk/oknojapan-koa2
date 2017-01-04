const serve = require('koa-static');

exports.init = app => app.use(serve('modules/01-users/public'));
