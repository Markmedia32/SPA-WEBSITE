document.addEventListener('DOMContentLoaded', function() {
    // Fetch bookings from server and display them
    fetch('/bookings')
    .then(response => response.json())
    .then(data => {
        // Display bookings in the bookingInfo section
        const bookingInfo = document.getElementById('bookingInfo');
        bookingInfo.innerHTML = ''; // Clear existing content

        // Loop through the bookings and create HTML elements to display them
        data.forEach(booking => {
            const bookingElement = document.createElement('div');
            bookingElement.textContent = `Name: ${booking.name}, Email: ${booking.email}, Service: ${booking.service}, Date: ${booking.date}, Time: ${booking.time}`;
            bookingInfo.appendChild(bookingElement);
        });
    })
    .catch(error => {
        console.error('Error fetching bookings:', error);
        const bookingInfo = document.getElementById('bookingInfo');
        bookingInfo.textContent = 'Error fetching bookings. Please try again later.';
    });
});

