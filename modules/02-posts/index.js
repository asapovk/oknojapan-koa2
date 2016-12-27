const path = require('path');
const fs = require('fs');


const handlers = fs.readdirSync(path.join(__dirname, 'middlewares')).sort();

exports.init = (router,app) => {

handlers.forEach(handler => require('./middlewares/' + handler).init(app));

router.get('/posts', require('./routes/posts-index').get);
router.get('/posts/:id',require('./routes/posts-single').get);
//router.get('/posts/categories',require('./routes/posts-category-index').get);
//router.get('/posts/:category',require('./routes/posts-category-single').get);
}
