const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
// create express app
const app = express();
app.use(cors());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({limit: '50mb', extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json({limit: '50mb'}))
// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url,{ useNewUrlParser: true })
.then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log(err)
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

// define a place route
app.get('/', (req, res) => {
    res.json({"message": "Simple App"});
});

require('./app/routes/places.routes.js')(app);

// listen for requests
app.listen(3003, () => {
    console.log("Server is listening on port 3003");
});
