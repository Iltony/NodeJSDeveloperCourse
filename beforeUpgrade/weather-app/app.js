const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

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

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
	if (errorMessage) {
		console.log(errorMessage);
	}
	else {
		console.log(JSON.stringify(results.address, undefined, 2));
		const lat = results.latitude;
		const lng = results.longitude;

		weather.getWeather(lat,lng, (error, weatherResult) => {
			if (error) {
				console.log(error)
			} else {
				console.log(`It's currently ${weatherResult.temperature}, It's feels like ${weatherResult.apparentTemperature}`)
			}
		})
	}
});



