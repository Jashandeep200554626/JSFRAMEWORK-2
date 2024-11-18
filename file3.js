const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

// json aprser
app.use(bodyParser.json());

const dataFilePath = './data/data.json';
let cars = JSON.parse(fs.readFileSync(dataFilePath, 'utf-8'));

// CRUD Operations

// Create
app.post('/cars', (req, res) => {
    const newCar = req.body;
    cars.push(newCar);
    fs.writeFileSync(dataFilePath, JSON.stringify(cars, null, 2)); 
    res.send('Car added successfully!');
});

// Read
app.get('/cars', (req, res) => {
    res.json(cars);
});

// Update
app.put('/cars/:id', (req, res) => {
    const carId = parseInt(req.params.id);
    const updatedCar = req.body;
    cars = cars.map(car => (car.id === carId ? { ...car, ...updatedCar } : car));
    fs.writeFileSync(dataFilePath, JSON.stringify(cars, null, 2)); 
    res.send('Car updated successfully!');
});

// Delete
app.delete('/cars/:id', (req, res) => {
    const carId = parseInt(req.params.id);
    cars = cars.filter(car => car.id !== carId);
    fs.writeFileSync(dataFilePath, JSON.stringify(cars, null, 2)); 
    res.send('Car deleted successfully!');
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
