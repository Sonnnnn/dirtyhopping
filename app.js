let map;

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 13.791719778722221, lng: 100.54841712959141 }, 
    zoom: 15,
  });
  const request = {
    placeId: "ChIJf4msdhud4jARi0uVOJwWefc",
    fields: ["name", "formatted_address", "place_id", "geometry", "photos"],
  };
  const infowindow = new google.maps.InfoWindow();
  const service = new google.maps.places.PlacesService(map);
  service.getDetails(request, (place, status) => {
    if (
      status === google.maps.places.PlacesServiceStatus.OK &&
      place &&
      place.geometry &&
      place.geometry.location
    ) {

      document.getElementById("cta").addEventListener("click", function() {

        const marker = new google.maps.Marker({
          map,
          position: place.geometry.location,
        });

          console.log(place.name);
          console.log(place.photos[0])

          document.getElementById("place_name").innerHTML = place.name;
          document.getElementById("place_photo").innerHTML = place.photos[0];
      });
    }
  });
}