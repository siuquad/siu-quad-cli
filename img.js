var arDrone = require('ar-drone'),
    fs = require('fs')
var clientOne  = arDrone.createClient({ip: "192.168.1.1"});
var clientTwo  = arDrone.createClient({ip: "192.168.1.2"});

clientOne.getPngStream().on('data', function(data) {
  fs.createWriteStream('droneOne.png').write(data)
})

clientTwo.getPngStream().on('data', function(data) {
  fs.createWriteStream('droneTwo.png').write(data)
})