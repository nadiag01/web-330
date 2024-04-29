"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-02

      Project to city and state information from a provided postal code
      Author: Nadia Gainer
      Date:   04/28/24

      Filename: project11-02.js
*/

let postalCode = document.getElementById("postalCode");
let place = document.getElementById("place");
let region = document.getElementById("region");
let country = document.getElementById("country");

postalCode.onblur = function() {
const codeValue= postalCode.value
const countryValue= country.value
place.value=""
region.value=""
fetch(`http://api.zippopotam.us/${countryValue}/${codeValue}`)
.then(response => response.json())
.then(json => {
      place.value = json.places[0]["place name"]
      region.value= json.places[0]["state abbreviation"]
})
.catch(error => console.log(error))
}



