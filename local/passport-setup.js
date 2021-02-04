const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

passport.serializeUser(function (user, done) {
  console.log("serialize", user);
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  console.log("deserialize", user);
  done(null, user);
});

passport.use(
  new LocalStrategy(function (username, password, done) {
    return done(null, { username: "dsfdfs", email: "erfsdf@fd.com" });
  })
);
