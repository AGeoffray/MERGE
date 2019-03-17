DROP DATABASE IF EXISTS Community_Pool;

CREATE DATABASE IF NOT EXISTS Community_Pool;

USE Community_Pool;

CREATE TABLE IF NOT EXISTS users(
    userId INT AUTO_INCREMENT,
    username VARCHAR(30) NOT NULL,
	email VARCHAR(255) NOT NULL UNIQUE,
	password_hash VARCHAR(255) NOT NULL,
    bio TEXT NOT NULL,
    photo VARCHAR(255),
    hasCar BOOLEAN NOT NULL DEFAULT true,
    PRIMARY KEY (userId)
); 

-- userId refers to the user who requested the ride
CREATE TABLE IF NOT EXISTS rides (
    tripId INT AUTO_INCREMENT,
    userId INT,
    departure VARCHAR(255) NOT NULL,
    arrival VARCHAR(255) NOT NULL,
    trip_date DATE NOT NULL, 
    trip_time VARCHAR(10) NOT NULL,
    notes VARCHAR(255),
    FOREIGN KEY (userId) REFERENCES users(userId),
    PRIMARY KEY (tripId)
);

-- userId refers to the user that was given a rating, authorId refers to the user who rated them.
CREATE TABLE IF NOT EXISTS ratings (
    ratingId INT AUTO_INCREMENT NOT NULL,
    userId INT, 
    authorId INT,
    rating INT NOT NULL,
    review VARCHAR(255) NOT NULL,
    FOREIGN KEY (userId) REFERENCES users(userId),
	FOREIGN KEY (authorId) REFERENCES users(userId),
    PRIMARY KEY (ratingId)
);


-- available cities
CREATE TABLE IF NOT EXISTS cities (
    cityId INT AUTO_INCREMENT NOT NULL,
    city VARCHAR(100) NOT NULL,
    PRIMARY KEY (cityId)
)



-- DATETIME[(fsp)]
-- A date and time combination. The supported range is '1000-01-01 00:00:00.000000' to '9999-12-31 23:59:59.999999'. 
-- MySQL displays DATETIME values in 'YYYY-MM-DD HH:MM:SS[.fraction]' format, 
-- but permits assignment of values to DATETIME columns using either strings or numbers.
-- An optional fsp value in the range from 0 to 6 may be given to specify fractional seconds precision. 
-- A value of 0 signifies that there is no fractional part. If omitted, the default precision is 0.
