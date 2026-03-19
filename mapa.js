const map = L.map('map').setView([-0.2298, -78.5249], 13);

const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution }).addTo(map);

// Ícono azul por defecto de Leaflet
const iconoAzul = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

fetch('/api/personas')
  .then(res => res.json())
  .then(personas => {
    const lista = document.getElementById('lista');
    const bounds = [];

    personas.forEach(p => {
      lista.innerHTML += `<li>${p.nombre} ${p.apellido} — ${p.direccion}</li>`;

      if (p.lat && p.lng) {
        L.marker([p.lat, p.lng], { icon: iconoAzul })
          .bindPopup(`<b>${p.nombre} ${p.apellido}</b><br>${p.direccion}`)
          .addTo(map);
        bounds.push([p.lat, p.lng]);
      }
    });

    if (bounds.length > 0) {
      map.fitBounds(bounds, { padding: [40, 40] });
    }
  })
  .catch(err => console.error('Error:', err));
