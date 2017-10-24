var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 59.9388068, lng: 30.3230066},
    zoom: 16
  });
}
function initMap() {
    var myLatLng = {lat: 59.9388068, lng: 30.3230066};
  
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      center: myLatLng
    });
  
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,

    });
  }