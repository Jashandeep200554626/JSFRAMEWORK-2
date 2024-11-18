// Import Express
const express = require('express');
const app = express();
const PORT = 3000;

// Names
app.get('/', (req, res) => {
    res.send(`
        <h1>Group 18</h1>
        <ul>
            <li>JASHANDEEP</li>
        </ul>
    `);
});

// Starting server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
