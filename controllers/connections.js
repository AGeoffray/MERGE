
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "", //PUT YOUR SQL PASSWORD HERE
    database: "Community_Pool"
});

connection.connect(function (err) {
    if (err) {
        console.log(err);
        return err;
    } else {
        console.log("Connected to Community_Pool DB");
    }
});

module.exports = connection;