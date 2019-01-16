const request = require('request');

const getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/28757e560dbc824251defffde63a28a1/${lat},${lng}`, 
        json: true}, (error, response, body) => {
    
        if (error) {
            callback('Unable to connect to forecast.io')
        } else if(response.statusCode === 200) {
            callback(undefined, { 
                'temperature': body.currently.temperature,
                'apparentTemperature': body.currently.apparentTemperature,
            })
        } else {
            callback('Unable to fetch weather');
        } 
    
    });
};

//https://api.darksky.net/forecast/28757e560dbc824251defffde63a28a1/37.8267,-122.4233

module.exports.getWeather = getWeather;