// // Initialize the map
// const map = L.map('map').setView([51.505, -0.09], 13);

// // Add OpenStreetMap tiles
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
// }).addTo(map);

// // Add a marker
// L.marker([51.505, -0.09]).addTo(map)
//     .bindPopup('Hello, Leaflet!')
//     .openPopup();
  
//////////////////////////////////////

// Initialize the map
const map = L.map('map').setView([20.5937, 78.9629], 5); // Centered on India

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

map.on('click', function (e) {
    const { lat, lng } = e.latlng;
    console.log(`Clicked location: Latitude ${lat}, Longitude ${lng}`);

    // Call a function to fetch and display data
    fetchRegionData(lat, lng);
});

function fetchRegionData(lat, lng) {
    // Example: Use an API to fetch data
    const apiUrl = `https://example-api.com/region-data?lat=${lat}&lng=${lng}`;
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Display the data
            showRegionData(data);
        })
        .catch(error => {
            console.error('Error fetching region data:', error);
        });
}

function showRegionData(data) {
    const { vegetation, wildlife, waterBodies } = data;

    // Example: Display in a popup
    L.popup()
        .setLatLng([data.lat, data.lng])
        .setContent(`
            <h3>Region Data</h3>
            <p><strong>Vegetation:</strong> ${vegetation}</p>
            <p><strong>Wildlife:</strong> ${wildlife}</p>
            <p><strong>Water Bodies:</strong> ${waterBodies}</p>
        `)
        .openOn(map);
}
