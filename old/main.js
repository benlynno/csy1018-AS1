function initMap() {
  var loc = {lat: 5.6037, lng:0.1870};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: loc
  });
  var marker = new google.maps.Marker({
    position: loc,
    map: map
  });
}
