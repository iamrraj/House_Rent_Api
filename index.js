// FileName: index.js

//Imprt Express
let express = require('express');
// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');
// Import routes
let apiRoutes = require('./routes/api-routes');

//initialize the app
let app = express();

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
 }));
 app.use(bodyParser.json());
 // Connect to Mongoose and set connection variable
 // Deprecated: mongoose.connect('mongodb://localhost/resthub');
 mongoose.connect('mongodb://localhost/realestate', { useNewUrlParser: true});
 var db = mongoose.connection;
 
// Added check for DB connection
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

// Use Api routes in the App
app.use('/api', apiRoutes)

//Setup Server Port
var port = process.env.PORT || 8000;

//Send Message for default url
app.get('/', (req, res) => res.send('Hello World with Express'));

//Lunch app to listen to specified port
app.listen(port,() =>{
    console.log("Running RestHub on port " + port);
});

