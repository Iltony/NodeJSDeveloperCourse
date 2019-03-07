const request = require('request');
const keys = require('../../../keys')









var geocodeAddress = (address) => {
    const encodedAddress = encodeURIComponent(address);
    

    return new Promise(
        (resolve, reject) => {
            request({
                url: `http://wwwmapquestapi.com/geocoding/v1/address?key=${keys.ADDRESSKEY}&location=${encodedAddress}`,
                json: true
            }, (error, response, body) => {
                if(error) {
                    Promise.resolve()
                    reject('Unable to connect with the server.');
                } else if (body.info.statuscode === 400){
                    reject('Unable to find that address.');
                } else if (body.info.statuscode  === 0){
                    resolve({
                        address: body.results[0].providedLocation.location,
                        latitude: body.results[0].locations[0].latLng.lat,
                        longitude: body.results[0].locations[0].latLng.lng
                    });
                }
            });
        });
};

geocodeAddress('11600').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
    console.log(errorMessage)
})



module.exports.geocodeAddress = geocodeAddress;
