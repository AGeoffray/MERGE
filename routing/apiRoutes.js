// Require external libraries
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
// var path = require('path');

//for maps API
// var NodeGeocoder = require("node-geocoder");

// var mysql = require('mysql');
// var connection = require('../controllers/connections.js');

// var bcrypt = require('bcryptjs');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(methodOverride());
var connection = require('../controllers/connections.js');

// Connecting apiRoutes to server.js, making sure routes are available when server.js is running
module.exports = function (app) {

    var express = require("express");

    app.use(bodyParser.urlencoded({ extended: false }))

    // ********   Home Route        ********
    app.get("/", function (req, res) {
        res.render("home")
    })

    // *************************************
    // ******** SIGNUP/LOGIN ROUTES ********
    // *************************************

    // Sign Up Form Data
    // app.post('/signup', function (req, res) {
    //     var car = req.body.newcar;
    //     if (car === "YES")
    //         car = 1;
    //     else
    //         car = 0;

    //     bcrypt.genSalt(10, function (err, salt) {
    //         bcrypt.hash(req.body.newpassword, salt, function (err, p_hash) {
    //             // connection.query("INSERT INTO users (username, email, password_hash, bio, photo, hasCar) VALUES (?, ?, ?, 'New member!', ?, ?)", 
    //             // [req.body.newname, req.body.newemail, p_hash, req.body.newpic, car], function(err, results, fields){
    //             connection.query("INSERT INTO users (username, email, password_hash, photo, hasCar) values(?,?,?,?,?)", [req.body.newname, req.body.newemail, p_hash, req.body.newpic, car], function (err, results, fields) {
    //                 if (err)
    //                     res.status(500).send('Ooops! The email address you are trying to use is already associated with an account. Would you like to login?');
    //                 else {
    //                     var Id = results.insertId;
    //                     connection.query("SELECT * from users where userId = (?)", [Id], function (err, rows, fields) {
    //                         req.session.userId = rows[0].userId;
    //                         req.session.email = rows[0].email;
    //                         req.session.username = rows[0].username;

    //                         res.render('userhome', { connected: req.session.username, user: results[0] });

    //                         res.render('userhome.handlebars', { connected: req.session.username, user: results[0] });

    //                         app.get('/rides_forum', function (req, res) {
    //                             res.render('search.handlebars', { connected: req.session.username, user: results[0] });
    //                         })

    //                         app.get('/accountsettings', function (req, res) {
    //                             res.render('edit.handlebars', { connected: req.session.username, user: results[0] });
    //                         })
    //                         //res.redirect('/start')
    //                         //   if (rows[0].hasCar === 1)
    //                         //   //user has a car
    //                         //     res.render("businesshome", { connected: req.session.username, user: results[0] })
    //                         //   //console.log(results[0])
    //                         //   else
    //                         //     res.render("userhome", { connected: req.session.username, user: results[0] })
    //                     })
    //                 }
    //             })
    //         })
    //     })
    // })

    // //                 **** check session before rendering page *****
    // /*                  if (req.session.userId && req.cookies.user_sid) 
    //                  {
    //                      res.render("index", { user: req.session.username })
    //                  }
    //                    else 
    //                  {
    //                    res.render("logon")
    //                  }
    
    // */

    // // Sign In Form Data
    // app.post('/signin', function (req, res) {
    //     connection.query('SELECT * FROM users WHERE email = ?', [req.body.logemail], function (error, results, fields) {
    //         if (error)
    //             throw error;
    //         if (results.length == 0) {
    //             res.status(500).send('Oh no! There is no account with that email address. Would you like to create one?');
    //         }
    //         else {
    //             bcrypt.compare(req.body.logpassword, results[0].password_hash, function (err, result) {
    //                 if (result == true) {
    //                     req.session.hasCar = results[0].hasCar;
    //                     req.session.userId = results[0].userId;
    //                     req.session.email = results[0].email;
    //                     req.session.username = results[0].username;


    //                     res.render('userhome.handlebars', { connected: req.session.username, user: results[0] });

    //                     app.get('/rides_forum', function (req, res) {
    //                         res.render('search.handlebars', { connected: req.session.username, user: results[0] });
    //                     })

    //                     app.get('/user', function (req, res) {
    //                         res.render('userhome.handlebars', { connected: req.session.username, user: results[0] });
    //                     })

    //                     app.get('/accountsettings', function (req, res) {
    //                         res.render('account.handlebars', { connected: req.session.username, user: results[0] });
    //                     })

    //                 }
    //                 else {
    //                     res.status(500).send("Oops! We don't have an account with that username/password combo :( ");
    //                 }
    //             })
    //         }
    //     })
    // })

    // //     if (req.session.hasCar === 1){
    // //       res.render('businesshome.handlebars', {connected: req.session.username, user: results[0]});

    // //       // app.get('business-home', function(req, res){
    // //       //   res.render('businesshome.handlebars', {connected: req.session.username, user:results[0]})
    // //       // })

    // //       app.get('/business-edit', function (req, res) {
    // //         res.render('business-edit.handlebars', {connected: req.session.username, user: results[0] });
    // //       })
    // //       app.get('/business-search', function (req, res) {
    // //         res.render('business-search.handlebars', {connected: req.session.username, user: results[0] });
    // //       })
    // //       app.get('/business-reviews', function (req, res) {
    // //         res.render('business-reviews.handlebars', {connected: req.session.username, user: results[0] });
    // //       })
    // //       app.get('/business-home', function (req, res) {
    // //         res.render('businesshome.handlebars', {connected: req.session.username, user: results[0] });
    // //       })


    // //     //console.log(results[0])
    // //   }else
    // //       res.render("userhome.handlebars", { connected: req.session.username, user: results[0] })

    // //     app.get('/user-edit', function (req, res) {
    // //       res.render('user-edit.handlebars', {connected: req.session.username, user: results[0] });
    // //     })

    // //     app.get('/user-search', function (req, res) {
    // //       res.render('user-search.handlebars', {connected: req.session.username, user: results[0] });
    // //     })

    // //     app.get('/user-review', function (req, res) {
    // //       res.render('user-review.handlebars', {connected: req.session.username, user: results[0] });
    // //     })

    // //     app.get('/user-business', function (req, res) {
    // //       res.render('user-business.handlebars', {connected: req.session.username, user: results[0] });
    // //     })

    // //     app.get('/user-home', function (req, res) {
    // //       res.render('userhome.handlebars', {connected: req.session.username, user: results[0] });
    // //     })

    // //   }
    // //   else {
    // //     res.status(500).send('Invalid password... ');
    // //   }
    // // });
    // //   }
    // //     })
    // //   });

    // // logout
    // app.get('/logout', function (req, res) {
    //     req.session.destroy(function (err) {
    //         if (err) throw err;
    //         res.render("home");
    //     })
    // });




    // *************************************
    // ********* USER ROUTES ************
    // *************************************

    // route to get a specific user's info, and all of the ratings written about them by other users
    app.get('/user/:id', function (req, res) {
        connection.query('SELECT * FROM users u LEFT JOIN ratings r ON u.userId=r.userId LEFT JOIN rides ON u.userId=rides.userId WHERE u.userId=?', [req.params.id], function (err, results) {
            if (err) throw err;
            res.json(results);
        })
    })

    //a route to find all user table data from every user
    app.get('/allusers', function (req, res) {
        connection.query("SELECT * FROM users", function (error, results) {
            if (error) throw error;
            res.json(results);
        })
    })

    // route to get ratings that this user has written about other users
    app.get('/user/myreviews/:id', function (req, res) {
        connection.query("SELECT u.username, u.photo, u.email, u.bio, u.hasCar, r.userId, r.authorId, r.rating, r.review FROM users u LEFT JOIN ratings r ON u.userId=r.authorId WHERE u.userId=?", [req.params.id], function (err, results, fields) {
            if (err) throw err;
            res.json(results);
        })
    })

    // route to get the average rating of a user by calculating the sum of all ratings (MUST DIVIDE THIS # BY RATINGS.LENGTH FOR ACCURATE RESULT)
    app.get('/user/score/:id', function (req, res) {
        connection.query("SELECT SUM(rating) FROM ratings WHERE userId=?", [req.params.id], function (err, results, fields) {
            if (err) throw err;
            res.json(results);
        })
    })

    // route that displays all rides to the browser and also show their user info
    app.get('/rides', function (req, res) {
        connection.query('SELECT * FROM rides LEFT JOIN users ON users.userId=rides.userId', function (error, results, fields) {
            if (error) throw error;
            res.json(results);
        });
    });

    //*********************************** */
    //=========== EDITING ROUTES ==========
    //********************************** */

    // a route to let the user edit their email
    app.post('/edit/email/:id', function (req, res) {
        connection.query("UPDATE users SET email=? WHERE userId=?", [req.body.updateEmail, req.params.id], function (err, results, fields) {
            if (err) throw err;
            console.log(results);
            alert("Update complete!");
            res.render('account.handlebars');
        })
    })

    // route to let user edit their bio
    app.post('/edit/bio/:id', function (req, res) {
        connection.query("UPDATE users SET bio=? WHERE userId=?", [req.body.updateBio, req.params.id], function (err, results, fields) {
            if (err) throw err;
            console.log(results);
            alert("Update complete!");
            res.render('account.handlebars');
        })
    })

    // route to let user edit their username
    app.post('/edit/name/:id', function (req, res) {
        connection.query("UPDATE users SET username=? WHERE userId=?", [req.body.updateName, req.params.id], function (err, results, fields) {
            if (err) throw err;
            console.log(results);
            alert("Update complete!");
            res.render('account.handlebars');
        })
    })

    // route to let user update their car status
    app.post('/edit/driverstatus/:id', function (req, res) {
        connection.query("UPDATE users SET hasCar=? WHERE userId=?", [req.body.updateCar, req.params.id], function (err, results, fields) {
            if (err) throw err;
            console.log(results);
            alert("Update complete!");
            res.render('account.handlebars');
        })
    })

    // route to let user edit their photo
    app.post('/edit/photo/:id', function (req, res) {
        connection.query("UPDATE users SET photo=? WHERE userId=?", [req.body.updatePhoto, req.params.id], function (err, results, fields) {
            if (err) throw err;
            console.log(results);
            alert("Update complete!");
            res.render('account.handlebars');
        })
    })

    // route to let user edit their password
    app.post('/edit/password/:id', function (req, res) {
        connection.query("UPDATE users SET password_hash=? WHERE userId=?", [req.body.updatePassword, req.params.id], function (err, results, fields) {
            if (err) throw err;
            console.log(results);
            alert("Update complete!");
            res.render('account.handlebars');
        })
    })


    //*****************************************************
    //-======= LOCATIONS ROUTES AND FUNCTIONS ============
    //******************************** ********************

    // route to get all cities, for use in dropdown menus etc
    app.get('/cities', function (req, res) {
        connection.query('SELECT * FROM cities', function (err, result) {
            if (err) console.log("there was a problem");
            res.json(result);
        })
    })

    // a route for user to create a new ride request
    app.post('/request/:id', function(req, res){
        connection.query("INSERT INTO rides (userId, departure, arrival, trip_date, trip_time, notes) VALUES (?,?,?,?,?,?)", [req.params.id, req.body.submitStart, req.body.submitEnd, req.body.submitDate, req.body.submitTime, req.body.submitNote], function(err, result, fields){
            if(err) throw err;
            console.log(result);
            res.render('search.handlebars');
        })
    })


    // mapquest API consumer key
    // var options = {
    //     provider: "mapquest",
    //     apiKey: "MkvnlK3bxGmbQK6xvXPuoynLTby4GJXI"
    // };

    // var geocoder = NodeGeocoder(options);

    // Format the address using process.argv
    //  var address = process.argv.slice(2).join(" ");

    // Log the address we built
    //  console.log("Searching for " + address);
    // app.get('/search-cities', function (req, res) {

    //     geocoder.geocode([req.body.searchCity], function (err, data) {
    //         if (err) console.log("there was an error.");
    //         console.log(data);
    //         console.log(JSON.stringify(data, null, 2));
    //         JSON.stringify(data, null, 2);
    //         res.json(data);
    //     })

    // })





}