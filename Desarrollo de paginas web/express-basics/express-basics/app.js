// Import and create app here
const express = require('express');
const app = express();

const { getElementById, getIndexById, updateElement,
    seedElements, createElement } = require('./utils');

const expressions = [];
seedElements(expressions, 'expressions');

const PORT = process.env.PORT || 4001;

// Use static server to serve the Express Yourself Website
app.use(express.static('public'));

// Add your routes here


// Start the server listening on PORT here
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

// Log a message to the console when the server has started
