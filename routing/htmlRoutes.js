var express = require('express');

var app = express();

var path = require('path');

// var mysql = require('mysql');

app.use(express.static("public"));

module.exports = function (app) {

    // var userId = req.session.userId;
    // var email = req.session.email;
    // var pic = req.session.photo;
    // var bio = req.session.bio;
    // var username = req.session.username;

    // render home page, or if user is logged in they will directed to their profile page (userhome)
    app.get('/', function (req, res) {
        if (req.session.userId && req.cookies.user_sid) {
            // res.render(path.join(__dirname, '/../views/userhome.handlebars'))
            res.render('userhome', { connected: req.session.username, user: results[0] });
        } else {
            res.render('home');
        }
    })

    // a home route
    app.get('/home', function (req, res) {
        if (req.session.user_id && req.cookies.user_sid) {
            res.render(path.join(__dirname, '/../views/userhome.handlebars'));
        }
        else {
            res.render("home")
        }
    });

    // Route to login page
    app.get('/loginpage', function(req, res){
        res.render(path.join(__dirname, '/../views/login.handlebars'));
    })

    // Route to successful signup
    app.get('/signup-success', function(req, res){
        res.render(path.join(__dirname, '/../views/signup-sucess.handlebars'));
    })

    // Route to failed signup
    app.get('/signup-failed', function(req, res){
        res.render(path.join(__dirname, '/../views/signup-failed.handlebars'));
    })

    app.get('/userhome', function (req, res){
        res.render(path.join(__dirname, '/../views/userhome.handlebars'));
    })

    // route to browse all available rides
    app.get('/rides_forum', function (req, res) {
        res.render(path.join(__dirname, '/../views/search.handlebars'))
        // res.render('search.handlebars', { connected: req.session.username, user: results[0] });
    })

    // route to account.handlebars where user can update bio and other personal info
    app.get('/accountsettings', function (req, res) {
        // res.render('account.handlebars', { connected: req.session.username, user: results[0] });
        // res.render(path.join(__dirname, '/../views/account.handlebars' + { connected: req.session.username }));
        res.render(path.join(__dirname, '/../views/account.handlebars'));
    })

    // Route to view another user's page
    app.get('/userpage', function (req, res){
        res.render(path.join(__dirname, '/../views/userpage.handlebars'));
    })

    // Route to view 'about us / contact' page
    app.get('/about', function(req, res){
        res.render(path.join(__dirname, '/../views/about.handlebars'));
    })

    // Route to request a ride
    app.get('/ride_request', function(req, res){
        res.render(path.join(__dirname, '/../views/riderequest.handlebars'));
    })



}

