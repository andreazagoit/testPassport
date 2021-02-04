const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const passport = require("passport");
const cookieSession = require("cookie-session");
const port = 3000;
require("./passport-setup");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  cookieSession({
    name: "test-local-user",
    keys: ["key1", "key2"],
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.send("Welcome to the Homepage");
});

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/error",
  })
);

app.get("/logout", (req, res) => {
  req.session = null;
  req.logOut();
  res.redirect("/");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
