const Influx = require('influx');
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const influx = new Influx.InfluxDB({
  host: 'localhost',
  database: 'simulator',
});
// mounted setInterval() function
// before destroy

function updateInfluxDB(message) {
  // console.log(message);
  var temperature = message.temperature.toFixed(1);
  temperature = parseFloat(temperature);

  var humidity = message.humidity.toFixed(1);
  humidity = parseFloat(humidity);

  // var date = new Date(message.timestamp);
  // var dateString = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
  // var time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
  // console.log(time);

  influx
    .writePoints([
      {
        measurement: message.deviceId,
        fields: { temperature: temperature, humidity: humidity },
        timestamp: message.timestamp,
      },
    ])
    .catch(err => {
      console.error(`Error saving data to influxdb. ${err.stack}`);
    });
}

function runInfluxDB() {
  influx
    .getDatabaseNames()
    .then(names => {
      if (!names.includes('simulator')) {
        return influx.createDatabase('simulator');
      }
    })
    .then(() => {
      http.createServer(app).listen(3000, function() {
        console.log('Listening on port 3000');
      });
    })
    .catch(err => {
      console.error(`Error creating Influx database!`);
    });
  // readInfluxData();
}

app.get('/data/device-1', function(req, res) {
  influx
    .query(
      `
    select * from "dummy-temp-1"
    order by time desc
    limit 10
    `,
    )
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.status(500).send(err.stack);
    });
});

module.exports = { updateInfluxDB, runInfluxDB };
