const path = require('path');
const fs = require('fs');


const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();


const config = require('config');
const mongoose = require('./libs/mongoose');

// keys for in-koa KeyGrip cookie signing (used in session, maybe other modules)
app.keys = [config.secret];


const handlers = fs.readdirSync(path.join(__dirname, 'middlewares')).sort();
const modules = fs.readdirSync(path.join(__dirname, 'modules')).sort();

handlers.forEach(handler => require('./middlewares/' + handler).init(app));
modules.forEach(module => require('./modules/' +  module).init(router,app));


router.get('/', require('./routes/homepage').get);

app.use(router.routes());
app.listen(3000);
