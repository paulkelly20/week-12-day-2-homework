const MapWrapper = function (element, coords, zoom) {
  const osmLayer = new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");
 this.map  = L.map(element)
               .addLayer(osmLayer)
               .setView(coords, zoom);
  this.map.on("click", function(event){
    this.addMarker(event.latlng)
  } .bind(this));
  const button = document.createElement('button');
  const buttonDiv = document.getElementById('button');
  button.textContent = "Take me to Chicago"
  buttonDiv.appendChild(button)
  button.addEventListener("click", function (event) {
      this.flyTo()
  }.bind(this));
}

MapWrapper.prototype.flyTo = function () {

    this.map.flyTo([41.881832, -87.623177], 15);
};
MapWrapper.prototype.addMarker = function (coords) {
  L.marker(coords).addTo(this.map);
};
