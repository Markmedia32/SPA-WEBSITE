const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON body
app.use(bodyParser.json());

// In-memory storage for booking data
let bookings = [];

// Route to handle booking submissions
app.post('/booking', (req, res) => {
    const booking = req.body;
    bookings.push(booking);
    console.log('New booking:', booking);
    res.status(201).send('Booking received successfully.');
});

// Route to retrieve all bookings
app.get('/bookings', (req, res) => {
    res.json(bookings);
});

// Serve static files from the current directory
app.use(express.static(__dirname));

// Define route to serve booking.html
app.get('/booking.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'booking.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
