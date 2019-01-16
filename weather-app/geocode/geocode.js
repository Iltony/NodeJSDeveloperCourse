const request = require('request');
const keys = require('../../keys')

const geocodeAddress = (address, callback) => {
    const encodedAddress = encodeURIComponent(address);
    
    request({
        url: `http://www.mapquestapi.com/geocoding/v1/address?key=${keys.ADDRESSKEY}&location=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
        if(error) {
            callback('Unable to connect with the server.');
        } else if (body.info.statuscode === 400){
            callback('Unable to find that address.');
        } else if (body.info.statuscode  === 0){
            callback(undefined, {
                address: body.results[0].providedLocation.location,
                latitude: body.results[0].locations[0].latLng.lat,
                longitude: body.results[0].locations[0].latLng.lng
            });
        }
    });
    
}


module.exports.geocodeAddress = geocodeAddress;