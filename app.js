// Airtable API

var Airtable = require('airtable');
Airtable.configure({
    apiKey: 'keyqBkxeEokhp8v71'
});

var base = Airtable({apiKey: 'keyqBkxeEokhp8v71'}).base('appSb8rYBk8f1qWcj');

var table = base('CafeList');

table.select({
  // Selecting the first 3 records in Grid view:
  maxRecords: 100,
  view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
  // This function (`page`) will get called for each page of records.

  records.forEach(function(record) {
      console.log('Retrieved', record.get('Place ID'));
  });

  // To fetch the next page of records, call `fetchNextPage`.
  // If there are more records, `page` will get called again.
  // If there are no more records, `done` will get called.
  fetchNextPage();

}, function done(err) {
  if (err) { console.error(err); return; }
});


// Google Map API

let map;

function initMap() {
  document.getElementById("cta").addEventListener("click", function() {
    
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

        const marker = new google.maps.Marker({
          map,
          position: place.geometry.location,
        });

          console.log(place.name);
          console.log(place.photos[0])

          document.getElementById("place_name").innerHTML = place.name;
          document.getElementById("place_photo").innerHTML = place.photos[0];
      
    // }
  });
});
}