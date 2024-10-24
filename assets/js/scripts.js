// Load footer from footer.html
fetch('./components/footer.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to load footer');
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
    })
    .catch(error => {
        console.error('Error:', error);
    });

// Load navbar from navbar.html
fetch('./components/navbar.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to load navbar');
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('navbar-placeholder').innerHTML = data;
    })
    .catch(error => {
        console.error('Error:', error);
    });
