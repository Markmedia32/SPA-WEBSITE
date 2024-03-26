// Modify the event listener to send booking information to the server
document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('bookingForm');

    bookingForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const service = document.getElementById('service').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;

        // Validate form fields (you can add more validation as needed)
        if (!name || !email || !service || !date || !time) {
            alert('Please fill in all fields.');
            return;
        }

        // Send form data to server using Fetch API
        fetch('/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                service: service,
                date: date,
                time: time
            })
        })
        .then(response => {
            if (response.ok) {
                alert('Booking successful! We will contact you shortly.');
                bookingForm.reset(); // Reset the form after successful submission
            } else {
                throw new Error('Failed to submit form.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Booking Successful! We will contact you shortly.');
        });
    });
});

