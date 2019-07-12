const request = require('request');

const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicmFodWxiZXJhMjEiLCJhIjoiY2p4aW5iZzBsMXB3aDQwbnp1dXo3MndzaCJ9.gmw36ZY-jws60dy1tBNxxg&limit=1'
var longitude;
var latitude;
 
request({ url: geoUrl, json: true }, (err, response) => {
    latitude = response.body.features[0].center[1];
    longitude = response.body.features[0].center[0];
    console.log(latitude, longitude);
})

const url = 'https://api.darksky.net/forecast/16b083f7053e9e55243dd499148641b8/'+latitude+','+longitude+'?units=si';
console.log(url);

request({url : url, json: true}, (err, response) => {
    console.log(response.body)
}) 