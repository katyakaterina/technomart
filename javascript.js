var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 59.9388068, lng: 30.3230066},
    zoom: 16
  });
}