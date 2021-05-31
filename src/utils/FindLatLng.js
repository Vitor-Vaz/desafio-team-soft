const fetch = require('node-fetch');


async function findLatLng(number, log, city, state) {

    const location = `${number} ${log} ${city} ${state}`;


    
    const url = process.env.GOOGLE_API_KEY;

    const data = await fetch(`${url}`);


    const formated = await data.json();


    const coordinates = {
        lat: formated.results[0].geometry.location.lat,
        lng: formated.results[0].geometry.location.lng,
    }


    return coordinates;
}

module.exports = findLatLng;
