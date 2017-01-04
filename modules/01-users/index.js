const path = require('path');
const fs = require('fs');


const handlers = fs.readdirSync(path.join(__dirname, 'middlewares')).sort();

exports.init = (router,app) => {

handlers.forEach(handler => require('./middlewares/' + handler).init(app));

router.post('/signin', require('./routes/signin').post);
router.get('/signout', require('./routes/signout').post);
router.post('/signup', require('./routes/signup').post);
router.get('/signin', require('./routes/signin-page').get);
router.get('/signup', require('./routes/signup-page').get);
router.get('/confirm/:id/:token', require('./routes/confirm-email').get);
router.get('/user/:id', require('./routes/user-page').get);
}
