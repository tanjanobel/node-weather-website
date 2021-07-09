const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=10c2bc138e8f34310a33dd3b1b0121d7&query=' + latitude + ',' + longitude;

    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (body.error) {
            callback('Unable to find location', undefined);
        } else {
            callback(
                undefined,
                body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degres out. It feels like ' +
                body.current.feelslike + ' degres out. The humidity is ' + body.current.humidity + '%.'
            )
        }
    })
};

module.exports = forecast;