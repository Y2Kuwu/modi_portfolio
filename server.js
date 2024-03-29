// const express = require('express');
// const path = require('path');
// const favicon = require('serve-favicon');
// const logger = require('morgan');

// // Always require and configure near the top 

// //require('dotenv').config();

// // Connect to the database

// //require('./config/database');

// // Local variables will come in handy for holding retrieved documents


// const app = express();

// app.use(logger('dev'));
// app.use(express.json());

// // Configure both serve-favicon & static middleware
// // to serve from the production 'build' folder
// app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
// app.use(express.static(path.join(__dirname, 'build')));

// // Middleware to verify token and assign user object of payload to req.user.
// // Be sure to mount before routes

// //app.use(require('./config/checkToken'));

// // http://localhost:3001/api/users
// // app.use('/api/users', require('./routes/api/users'));
// //app.use('/api/jobs', require('./routes/api/jobs'));
// //app.use('/api/applications', require('./routes/api/schedule'));


// // Put API routes here, before the "catch all" route

// // The following "catch all" route (note the *) is necessary
// // to return the index.html on all non-AJAX requests
// app.get('/*', function (req, res) {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// // Configure to use port 3001 instead of 3000 during
// // development to avoid collision with React's dev server
// //const port = process.env.PORT || 3001;
// const port = process.env.PORT || 8000;


// app.listen(port, function () {
//     console.log(`Express app running on port ${port}`)
// });





















const express = require("express");
// eslint-disable-next-line no-unused-vars
// const bodyParser = require('body-parser');
const path = require("path");
const app = express();
const port = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, "build")));

// This route serves the React app
app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, "build", "index.html")));

app.listen(port, () => console.log(`Server listening on port ${port}`));