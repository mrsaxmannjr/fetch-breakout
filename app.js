// var baseUrl =  'https://drageons.herokuapp.com/character/1'
// var baseUrl =  'http://pokeapi.co/api/v2/pokemon/5'
var baseUrl =  'http://dnd5eapi.co/api/spells'

fetch(baseUrl)
  .then(response => {
    console.log(response);
    return response.json()
  })
  .then(response => {
    console.log(response[0]);
  })
