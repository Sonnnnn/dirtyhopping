// Airtable API

// var Airtable = require('airtable');
// Airtable.configure({
//     apiKey: 'keyqBkxeEokhp8v71'
// });

// var base = Airtable({apiKey: 'keyqBkxeEokhp8v71'}).base('appSb8rYBk8f1qWcj');

// var table = base('CafeList');

// table.select({maxRecords: 100, view: "Grid view"}).eachPage(
//   function page(records, fetchNextPage) {
//     console.log('test');
//     records.forEach(function(record) {
//       console.log('Retrieved', record.get('Place ID'));
//   });
//   fetchNextPage();
//   }
//   , function done(err) {
//   if (err) { console.error(err); return; }
// });


// Google Map API

let map;

function initMap() {

  const width = 400;
  const ref = 'ATtYBwJDadS4Tv25puYnspJ-4mNon9kZxjqUuau3jFFGMxS26vdPxJHUk2LLpGOsaIMQbxxFdU-uQwyEN2BytHalaHL26VVSXPjaLe9JYw1wk6OvDvsxRENSI2Fz6fSTSdbrWwvd2FHvgQrjY0G5JXx7eibpC7Ly4snL5HTmr4GOX0nrCOlU';
  const key = 'AIzaSyBUWJ6c7O0gOwtD4BsnLESjY8BD2ieCVNo';

  const url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${width}&photoreference=${ref}&key=${key}`

  $('#cta').click(function(){
    $.ajax({
      url: url,
      type: "GET",
      success: function(result){
        console.log(result);
      },
      error:function(error){
        console.log('error');
      }
    })
  })

  document.getElementById("cta").addEventListener("click", function() {
    
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 13.791719778722221, lng: 100.54841712959141 }, 
      zoom: 15,
      });

    const request = {
      placeId: "ChIJZ-5IYw2Z4jARODMrbGXIf00",
      key: "AIzaSyBUWJ6c7O0gOwtD4BsnLESjY8BD2ieCVNo",
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
          console.log(place.photos);
          
          document.getElementById("place_name").innerHTML = place.name;
          document.getElementById("place_photo").innerHTML = place.photos;

        
      
    // }
  });
});
}