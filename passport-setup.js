const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.serializeUser(function (user, done) {
  console.log("serialize");
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  console.log("deserialize");
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "10188102567-7rplte4b1s7auiln17cltdhgdqdere1d.apps.googleusercontent.com",
      clientSecret: "qUfbdxRBNpLp9E2gcO61qYaR",
      callbackURL: "http://localhost:3000/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  )
);
