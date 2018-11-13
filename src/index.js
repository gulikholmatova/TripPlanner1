const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken =
  'pk.eyJ1IjoiZXZlbWVuZGVsZXZpY2giLCJhIjoiY2pvZzlzc3Y5MDExdzN2cXQzYnZlZWI3OCJ9.L6N6O-Nb278QF551ERH10g';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});

// new mapboxgl.Marker().setLngLat([-74.009151, 40.705086]).addTo(map);
const markerDomEl = document.createElement('div');
markerDomEl.style.width = '32px';
markerDomEl.style.height = '39px';
markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';
new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);
