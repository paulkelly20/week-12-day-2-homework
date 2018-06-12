const drawMap = function () {
  const glasgow = [55.801507, -4.003805];
  const chicago = [41.881832, -87.623177];
  const zoomLevel = 15;
  const mapDiv = document.getElementById ("main-map")
  const mainMap = new MapWrapper (mapDiv, glasgow, zoomLevel)

  const whereButton = document.createElement('button');
  const buttonDiv = document.getElementById('button-where');
  whereButton.textContent = "Where am i?"
  buttonDiv.appendChild(whereButton)
  whereButton.addEventListener("click", function (event) {
      currentPosition();
  }.bind(this));
};


const currentPosition = function(){
    navigator.geolocation.getCurrentPosition(function(position) {
      window.alert(`${position.coords.latitude.toFixed(4)}, ${position.coords.longitude.toFixed(4)}`);
  });
}
window.addEventListener("load", drawMap);
