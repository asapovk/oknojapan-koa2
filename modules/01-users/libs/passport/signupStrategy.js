let passport = require('koa-passport');
let LocalStrategy = require('passport-local');
let User = require('../../models/user');
// Стратегия берёт поля из req.body
// Вызывает для них функцию
passport.use('local.signup',new LocalStrategy({
    usernameField: 'email', // 'username' by default
    passwordField: 'password',
    passReqToCallback: true // req for more complex cases
  },
  // Три возможных итога функции
  // done(null, user[, info]) ->
  //   strategy.success(user, info)
  // done(null, false[, info]) ->
  //   strategy.fail(info)
  // done(err) ->
  //   strategy.error(err)
  function(req, email, password, done) {

    let newUser = new User();
    newUser.email = email;
    newUser.password = password;
    newUser.displayName = req.body.displayName;
    newUser.token = 10; // This value is just for test purpose
    newUser.isConfirmed = false;

    User.create( newUser ,(err,user)=>{
      if (err) {
      if(err.name === 'MongoError' && err.code === 11000){
        return done(null, false, { message: 'Имя пользователя или email уже занято' });
      }
      return done(err);
     }
      return done(null,user);
    });
  }
));
