// Import Express
const express = require('express');
const fs = require('fs');
const app = express();

const PORT = 3000;

// display the JSON data
app.get('/cars', (req, res) => {
    // Read the JSON file
    fs.readFile('./data/data.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading data file.');
        } else {
            res.send(JSON.parse(data)); // Send poarsed JSON data
        }
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/cars`);
});
