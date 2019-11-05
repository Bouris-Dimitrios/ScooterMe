

      var map;

      function init() {
         map = new L.Map('map');
         L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
            maxZoom: 18
         }).addTo(map);
         map.attributionControl.setPrefix('');

        
         map.setView(new L.LatLng(39.665029, 20.853747),15);
      }
      var currentLocation;
      function onLocationFound(e) {
         var radius = e.accuracy / 2;
         var location = e.latlng
         currentLocation =location;
         var currentLocationMarker = L.marker(location).addTo(map).bindPopup("<b>Current Location</b>").openPopup();
      
      }

      function onLocationError(e) {
         alert(e.message);
      }
      var firstTimePressed = true;
      function getLocationLeaflet() {
          if(firstTimePressed ==true){
            map.on('locationfound', onLocationFound);
            map.on('locationerror', onLocationError);

            map.locate({setView: true, maxZoom: 15});
            firstTimePressed = false
        }else
         var currentLocationMarker = L.marker(currentLocation).addTo(map).bindPopup("<b>Current Location</b>").openPopup();
         
         
      }
    


      function createMarker(markerText){
          
          
           var loc = Object.assign({},currentLocation) ;
           if(loc.lat== null ||loc.lng == null){
               alert("Please find your location first.Press \"Locate Me\" button first");
               return;
           }
           marker = new L.marker(loc, {icon: customIcon}).bindPopup("<b>" +markerText + "</b>").openPopup().addTo(map);
         marketText= "";
      }
      
      
      function simulateMovement(){
         
          console.log(currentLocation);
          currentLocation.lat = getNewLatitude(currentLocation.lat);
          currentLocation.lng = getNewLongtitude(currentLocation.lng);
            var currentLocationMarker = L.marker(currentLocation).addTo(map).bindPopup("<b>Current Location</b>").openPopup();
      }
    function getNewLatitude(oldLatitude){
        meters= getRandomNum(200,400);
        var earth = 6378.137,  //radius of the earth in kilometer
         pi = Math.PI,
         m = (1 / ((2 * pi / 360) * earth)) / 1000;  //1 meter in degree

       return oldLatitude + (meters * m);
   }
   
   function getNewLongtitude(oldLongitude){
        var earth = 6378.137,  //radius of the earth in kilometer
          meters= getRandomNum(200,400);;
            pi = Math.PI,
            cos = Math.cos,
            m = (1 / ((2 * pi / 360) * earth)) / 1000;  //1 meter in degree

        return oldLongitude + (meters * m) / cos(oldLongitude * (pi / 180));       
   }
function getRandomNum(min, max) {
    return Math.random() * (max - min) + min;
}

    const myCustomColour = '#ffff00'

    const markerHtmlStyles = `
      background-color: ${myCustomColour};
      width: 2rem;
      height: 2rem;
      display: block;
      left: -1.0rem;
      top: -1.0rem;
      position: relative;
      border-radius: 2rem 2rem 0;
      transform: rotate(45deg);
      border: 1px solid #ff023f`

    const customIcon = L.divIcon({
      className: "my-custom-pin",
      iconAnchor: [0, 24],
      labelAnchor: [-6, 0],
      popupAnchor: [0, -36],
      html: `<span style="${markerHtmlStyles}" />`
    })

   