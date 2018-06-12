const drawMap = function () {
  const glasgow = [55.801507, -4.003805];
  const chicago = [41.881832, -87.623177];
  const zoomLevel = 15;
  const mapDiv = document.getElementById ("main-map")
  const mainMap = new MapWrapper (mapDiv, glasgow, zoomLevel)

};




window.addEventListener("load", drawMap);
