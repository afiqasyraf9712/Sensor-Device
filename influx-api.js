const Influx = require('influx');
const express = require('express');
const path = require('path');
const os = require('os');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();

const influx = new Influx.InfluxDB({
  host: 'localhost',
  database: 'simulator',
  port: 8086,
});

influx.getMeasurements().then(names => {
  console.log(names);
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/', (req, res) => {
  influx
    .query(
      `
    select * from "dummy-temp-1" 
    order by time desc 
    limit 20;
    
    select * from "dummy-temp-2" 
    order by time desc 
    limit 20;
    
    select * from "dummy-temp-3" 
    order by time desc 
    limit 20`,
    )
    .then(results => {
      //   results.forEach(result => res.send('Device 1: ' + JSON.stringify(result)));
      //   console.log(results);
      res.send(results);
    })
    .catch(err => console.log(err));
});

app.listen(5000);
