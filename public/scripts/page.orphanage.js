const options = {
    draggin: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoonControl: false
}

// get values from html
const Lat = document.querySelector('data-lat').dataset.lat
const Lng = document.querySelector('data-lng').dataset.lng

// create map
const map = L.map("mapid", options).setView([lat, lng], 15);

// create and add tileLayer

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);


// create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2],
  });


//create and add marker
L.marker([lat, lng], { icon })
  .addTo(map)
  
  

