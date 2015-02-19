var arDrone = require('ar-drone'),
    fs = require('fs')
var client  = arDrone.createClient();

client.getPngStream().on('data', function(data) {
  fs.createWriteStream('out.png').write(data)
})