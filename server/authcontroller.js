/* eslint-disable no-param-reassign */
// const mongoose = require('mongoose');
const passport = require('passport');
// const userModel = require('./models/user.model');

const userController = {};

userController.login = (req, res) => {
  if (req.session.user !== true) { res.sendFile(`${__dirname}/views/admin/auth.html`); } else { res.redirect('/admin/projects'); }
};

userController.chat = (req, res) => {
  if (req.session.user) { res.sendFile(`${__dirname}/views/admin/chat-admin.html`); } else {
    res.status(404)
      .sendFile(`${__dirname}/views/404.html`);
  }
};

userController.projects = (req, res) => {
  if (req.session.user) { res.sendFile(`${__dirname}/views/admin/projects.html`); } else {
    res.status(404)
      .sendFile(`${__dirname}/views/404.html`);
  }
};

userController.comments = (req, res) => {
  if (req.session.user) { res.sendFile(`${__dirname}/views/admin/comments.html`); } else {
    res.status(404)
      .sendFile(`${__dirname}/views/404.html`);
  }
};

userController.doLogin = (req, res) => {
  passport.authenticate('local')(req, res, () => {
    req.session.user = true;
    res.redirect('/admin/projects');
  });
};

userController.logout = (req, res) => {
  req.logout();
  req.session.user = false;
  res.redirect('/admin');
};


module.exports = userController;
