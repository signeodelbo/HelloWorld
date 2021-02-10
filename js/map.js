function mapLoad(){
    var latLng =[41.822968, -87.675102];
    var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
    var streets = L.tileLayer(mbUrl, {
        id: 'mapbox/satellite-streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        attribution: mbAttr});
    var map = L.map('map', {
        center: latLng,
        zoom: 15,
        layers: [streets]
    });
    var baseLayers = {
        "Grayscale": grayscale,
        "Streets": streets
    };
    L.control.layers(baseLayers).addTo(map);
    L.marker(latLng).addTo(map)
    .bindPopup("Central<br>Manufacturing<br>District").openPopup();
// click event
    var popup = L.popup();
    function onMapClick(e) {
        popup
        .setLatLng(e.latLng)
        .setContent("You clicked the map at " + e.latLng.toString())
        .openOn(map);
    }
    map.on('click', onMapClick);
}