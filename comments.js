// Create web server
const express = require('express');
const app = express();

// Create a port
const port = 3000;

// Import the comments.json file
const comments = require('./comments.json');

// Create a route
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});