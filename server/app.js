// import files and packages up here
// we are bringing in the data file 
const data = require("../server/data.json")
const express = require("express");
const morgan = require("morgan");

// create your express server below
// we are calling express to start up out server 
const app = express();

// add your routes and middleware below
// when we go to out '/' route it will print out status 200 for us to see 
app.get('/', (req, res) => {
    res.status(200).send('status 200');
});

// this is routing to our data.json file and printing the information onto the site
app.get("/data", (req, res) => {
    res.json(data);
})

// finally export the express application
module.exports = app;
