var mysql = require("mysql");
var express = require('express');
var app = express();

var bcrypt = require('bcryptjs');
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("public"));

//require other js routing pages
require('./routing/apiRoutes')(app);
require('./routing/htmlRoutes')(app);

//session stuff
var cookieParser = require('cookie-parser');
var session = require('express-session');

//allow sessions
app.use(session({ key: "user_sid", secret: 'app', cookie: { maxAge: 1 * 1000 * 60 * 60 * 24 * 365 } }));
app.use(cookieParser());

// Initializes the connection variable to sync with a MySQL database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Sql506087",
    database: "Community_Pool"
});

app.get('/', function (req, res) {
    if (req.session.userId && req.cookies.user_sid) {
        // res.render(path.join(__dirname, '/../views/userhome.handlebars'))
        res.render('userhome.handlebars', { connected: req.session.username, user: results[0] });
    } else {
        res.render('home.handlebars');
    }
});

// http://localhost:3000/users/1
app.get('/users/:id', function (req, res) {
    connection.query('SELECT * FROM users WHERE id = ?', [req.query.id], function (error, results, fields) {
        if (error) throw error;

        res.json(results[0]);
    });
});


// Signup Route
// localhost:3000/signup/pavankat@gmail.com/catsrule
// app.get('/signup/:email/:password', function (req, res) {
    app.get('/signup', function(req, res){

    bcrypt.genSalt(10, function (err, salt) {

        // res.send(salt);

        bcrypt.hash(req.query.newpassword, salt, function (err, p_hash) {

            // res.send(p_hash);

            connection.query('INSERT INTO users (username, email, password_hash, photo, hasCar) values(?,?,?,?,?)', [req.query.newname, req.query.newemail, p_hash, req.query.newpic, req.query.newcar], function (error, results, fields) {

                var what_user_sees = "";
                if (error) {
                    // direct user to error page, because they are using a password that already has an account.
                    what_user_sees = 'signup-failed.handlebars';
                } else {
                    // direct user to success message
                    what_user_sees = 'signup-successful.handlebars';
                }

                res.render(what_user_sees);

            });
        });
    });
});


// Login Route
// localhost:3000/login/alyssa@gmail.com/thepassisthepass
app.get('/login', function (req, res) {

    connection.query('SELECT * FROM users WHERE email = ?', [req.query.logemail], function (error, results, fields) {

        if (error) throw error;
        // res.json(results);

        if (results.length == 0) {
            alert("That password and email combination is invalid. Please try again.");
            // res.send('try again');
        } else {
            bcrypt.compare(req.query.logpassword, results[0].password_hash, function (err, result) {

                if (result == true) {

                    req.session.userId = results[0].userId;
                    req.session.email = results[0].email;
                    // req.session.username = results[0].username;
                    // req.session.photo = results[0].photo;
                    // req.session.bio = results[0].bio;

                    // res.render('userhome.handlebars', { connected: req.session.username, user: results[0] });
                    //   res.send('you are logged in');
                    res.render('userhome.handlebars');

                } else {
                    res.redirect('/');
                }
            });
        }
    });
});

//another-page route
app.get('/userhome', function (req, res) {
    var user_info = {
        userId: req.session.userId,
        email: req.session.email
    }

    // res.json(user_info);
    res.render('userhome.handlebars');
});

app.get('/logout', function (req, res) {
    req.session.destroy(function (err) {
        res.render('home.handlebars');
        // res.send('you are logged out');
    })
});

app.listen(3000, function () {
    console.log('listening on 3000');
});









