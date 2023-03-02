// Load modules
const express = require('express');
const path = require('path');
const taskRoutes = require('./routes/taskRoutes');

// Create express application
const app = express();

// To recognize the incoming request object as strings or arrays
app.use (express.urlencoded ({extended: true}));

// Application routes
app.use(taskRoutes);

// Set view engine and views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Listen on port 3000 for connections
app.listen(3000, () => {
  console.log('Server started and listening at http://localhost:3000');
});
