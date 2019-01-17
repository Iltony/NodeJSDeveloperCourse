const yargs = require('yargs');
const axios = require('axios');
const keys = require('../keys');

const argv = yargs.options({
	a: {
		demand: true,
		alias: 'address',
		describe: 'Address for fetch the weather for',
		string: true
	}
})
.help()
.alias('help', 'h')
.argv;


const encodedAddress = encodeURIComponent(argv.address);
const geocodeUrl = `http://www.mapquestapi.com/geocoding/v1/address?key=${keys.ADDRESSKEY}&location=${encodedAddress}`;

axios.get(geocodeUrl)
    .then((response)=> {
        if (response.data.info.statuscode === 400){
            throw new Error('Unable to find that address');
        }

        console.log(response.data.results[0].providedLocation.location);
        const lat = response.data.results[0].locations[0].latLng.lat;
        const lng = response.data.results[0].locations[0].latLng.lng;
        const weatherUrl = `https://api.darksky.net/forecast/${keys.WEATHERKEY}/${lat},${lng}`;

        return axios.get(weatherUrl);
    })
    .then((response) => {
        const temperature = response.data.currently.temperature;
        const apparentTemperature = response.data.currently.apparentTemperature;
        console.log(`It's currently ${temperature}, It's feels like ${apparentTemperature}`)
    })
    .catch((e)=>{
        if (e.code=== 'ENOTFOUND') {
            console.log('Unable to connect to API service');
        } else {
            console.log(e.message);
        }
    });
