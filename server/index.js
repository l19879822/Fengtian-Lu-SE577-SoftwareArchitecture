const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const session = require("express-session");
const dotenv = require("dotenv");
const app = express();
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

app.use(
  session({
    secret: "aweio9s8d732hoisd0f932ois809",
    resave: true,
    saveUninitialized: true,
  })
);

const port = process.env.SERVER_PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

const passport = require("passport");
app.use(passport.initialize());
app.use(passport.session());

app.get("/success", (req, res) => res.send("You have successfully logged in"));
app.get("/error", (req, res) => res.send("error logging in"));

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

const GitHubStrategy = require("passport-github2").Strategy;

const GITHUB_CLIENT_ID = process.env.CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.CLIENT_SECRET;

let auth = "";
let requesterUsername = "";
passport.use(
  new GitHubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
      auth = accessToken;
      requesterUsername = profile.username;
      return cb(null, profile);
    }
  )
);

app.get(
  "/auth/github",
  passport.authenticate("github", { scope: ["user", "repo"] })
);

app.get(
  "/auth/github/callback",
  passport.authenticate("github", { failureRedirect: "/error" }),
  function (req, res) {
    console.log(res);
    res.cookie("Authorization", auth);
    res.cookie("username", requesterUsername);
    res.redirect("http://localhost:8080/#/authentication");
  }
);

app.get("/logout", function (req, res) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    console.log("logged out");
    res.clearCookie("Authorization");
    res.clearCookie("username");
    res.redirect("http://localhost:8080/#/authentication");
  });
});
