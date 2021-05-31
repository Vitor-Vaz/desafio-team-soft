const fetch = require('node-fetch');
const key = require('./key');

async function findLatLng(number, log, city, state) {

    const location = `${number} ${log} ${city} ${state}`;


    
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${key}`

    const data = await fetch(`${url}`);


    const formated = await data.json();


    const coordinates = {
        lat: formated.results[0].geometry.location.lat,
        lng: formated.results[0].geometry.location.lng,
    }


    return coordinates;
}

module.exports = findLatLng;
