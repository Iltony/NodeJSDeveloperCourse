const request = require('request');
const keys = require('../../../keys');

const getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/${keys.WEATHERKEY}/${lat},${lng}`, 
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

module.exports.getWeather = getWeather;