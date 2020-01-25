const map = L.map('map').setView([-0.2452833,-78.5397534,17], 30);
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
const tileURL = 'https://b.tile.openstreetmap.org/{z}/{x}/{y}.png' 
const tile = L.tileLayer(tileURL,{attribution})
const api_url ='https://api.wheretheiss.at/v1/satelites/25544'
tile.addTo(map)

const marker = L.marker([-0.2452833,-78.5397534,17]).bindPopup('Bienvenido a mi casa ');
marker.addTo(map);

fetch(`http://localhost:4000/api/casa`)
.then(function(datos){
    datos.json()
}).then(function(ubi){
    document.getElementById('ubi').innerHTML = ubi.id
});
