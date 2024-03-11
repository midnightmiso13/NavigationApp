mapboxgl.accessToken = 'pk.eyJ1IjoibWlkbmlnaHRvbmthdHN1MTMiLCJhIjoiY2x0YTd2a2YxMWZ0YjJxcDNwandoZXNtZSJ9.eXZY49zeH7utwlOaIIPBJQ';    
  
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { 
    enableHighAccuracy: true 
})

function successLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
    setupMap([38.788612, -77.174316])
}

function setupMap(center) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15
    });

    const nav = new mapboxgl.NavigationControl()
    map.addControl(nav);

    var directions = new MapboxDirections({
        accessToken: 'pk.eyJ1IjoibWlkbmlnaHRvbmthdHN1MTMiLCJhIjoiY2x0YTd2a2YxMWZ0YjJxcDNwandoZXNtZSJ9.eXZY49zeH7utwlOaIIPBJQ'
      });

    map.addControl(directions, "top-left");
}