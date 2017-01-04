const path = require('path');
const fs = require('fs');


const handlers = fs.readdirSync(path.join(__dirname, 'middlewares')).sort();

exports.init = (router,app) => {

handlers.forEach(handler => require('./middlewares/' + handler).init(app));

router.get('/courses', require('./routes/courses-index').get);
//router.get('/courses/:id', require('./routes/courses-single').get);
//router.get('/lessons', require('./routes/lessons-index').get);
//router.get('/lessons/:id', require('./routes/lessons-single').get);
}
