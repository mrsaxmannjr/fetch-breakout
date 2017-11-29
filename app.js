// GET Request
// Request to get info from an api
// Different API endpoints - locations/addresses for data

var baseUrl = "https://swapi.co/api/";

//First arg is url you want data from
// REquest it
// Get it
// Translate it from "string"
// Work with it

fetch(baseUrl + "people")
  .then(response => {
    return response.json();
  })
  .then(response => {
    console.log(response.results[0]);
    // DOM manipulation
  })
  .catch(error => {
    console.log(error);

    // DOM manip to express error
  });
