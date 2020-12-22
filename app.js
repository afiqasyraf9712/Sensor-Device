const fb = require('./firebase');
const influxdb = require('./influx');
const index = require('./index');
const mqtt = require('mqtt');
const client = mqtt.connect(`mqtt://localhost`);
var $ = require('jquery');

const TEMP_DEVICE_COUNT = 3;

const topics = [];

client.on('connect', () => {
  console.log('MQTT/app connected');
  for (let i = 1; i <= TEMP_DEVICE_COUNT; i++) {
    const deviceId = `dummy-temp-${i}`;
    client.subscribe(`site-a/data/${deviceId}/temp`);
    topics.push(`site-a/data/${deviceId}/temp`);
  }

  console.log(topics);
});

client.on('message', (topic, message) => {
  const msg = JSON.parse(message.toString());
  console.log(msg);
  fb.updateFirebase(msg);
  influxdb.updateInfluxDB(msg);
  // display();
});

influxdb.runInfluxDB();

// async function display() {
//   // var temp, h, time;
//   // try {
//   //   const doc = await fbdb
//   //     .collection('simulator')
//   //     .doc('dummy-temp-3')
//   //     .get()
//   //     .then(doc => {
//   //       temp = doc.data().temperature;
//   //       h = doc.data().humidity;
//   //       time = doc.data().timestamp;
//   //     });
//   //   // if (!doc.exists) {
//   //   //   console.log('no data loaded');
//   //   // } else {
//   //   //   console.log('herer');
//   //   //   console.log(temp);
//   //   // }
//   //   console.log(temp);
//   // } catch (e) {
//   //   console.log(e);
//   // }
//   // connectToWeb(temp);
// }
