const express = require('express');
const router = express.Router();
require('dotenv').config();

// const { OAuth2Client } = require('google-auth-library');
// const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// const accessToken =
//   'ya29.a0Aa4xrXPBhGE-TpitnF09oT7lCzy4xYS5eYPN1kwluJUjdYlAA1UNM8d9QC6-OoEaDoCXV8SxhLOy62nccoYLbqCAW5XctzblfEIOZkRRUB5LTz1fSW7cd6dolgKHMTvIyOgg7B4KyO_bKOmDPwflwUWpjIAXaCgYKATASARASFQEjDvL9ThU7vSIclTVz78_-PMsqdQ0163';

// router.route('/googleLogin').get(async (req, res) => {
//   const googleAuth = async (token) => {
//     const ticket = await client.verifyIdToken({
//       idToken: token,
//       audience: process.env.GOOGLE_CLIENT_ID,
//     });
//     const payload = ticket.getPayload();
//     console.log(payload);
//   };
//   googleAuth();
//   res.send({ message: 'good' });
// });

var GoogleStrategy = require('passport-google-oauth2').Strategy;
const passport = require('passport');
const accessToken =
  'ya29.a0Aa4xrXPBhGE-TpitnF09oT7lCzy4xYS5eYPN1kwluJUjdYlAA1UNM8d9QC6-OoEaDoCXV8SxhLOy62nccoYLbqCAW5XctzblfEIOZkRRUB5LTz1fSW7cd6dolgKHMTvIyOgg7B4KyO_bKOmDPwflwUWpjIAXaCgYKATASARASFQEjDvL9ThU7vSIclTVz78_-PMsqdQ0163';
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET_ID,
      callbackURL: '/auth/google/callback',
      passReqToCallback: true,
    },
    (request, accessToken, refreshToken, profile, done) => {
      console.log(profile, 'hi');
      User.findOrCreate({ googleId: profile.id }, function (err, user) {
        return done(err, user);
      });
    }
  )
);

// router.route('/auth/google').get(async (req, res) => {
//   const data = passport.authenticate('google', { scope: ['email', 'profile'] });
//   res.send({ data });
// });

// router.route('/auth/google/callback').get(async (req, res) => {
//   const data = passport.authenticate('google', {
//     successRedirect: '/auth/google/success',
//     failureRedirect: '/auth/google/failure',
//   });
//   res.send({ data });
// });
router
  .route('/auth/google')
  .get(passport.authenticate('google', { scope: ['email', 'profile'] }));

router.route('/auth/google/callback').get(
  passport.authenticate('google', {
    successRedirect: '/auth/google/success',
    failureRedirect: '/auth/google/failure',
  })
);

module.exports = router;
