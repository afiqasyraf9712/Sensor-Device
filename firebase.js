const firebase = require('firebase');

// setup firebase
var config = {
  apiKey: 'AIzaSyBf7lydFnMf8rOa3Ep_Xu7aPZ21dVzYTM4',
  authDomain: 'temperature-sensor-c10f0.firebaseapp.com',
  databaseURL: 'https://temperature-sensor-c10f0-default-rtdb.firebaseio.com',
};
firebase.initializeApp(config);
var db = firebase.database();

// update database
function updateFirebase(message) {
  console.log('inside firebasejs');

  var temperature = message.temperature.toFixed(1);
  temperature = parseFloat(temperature);

  var humidity = message.humidity.toFixed(1);
  humidity = parseFloat(humidity);

  var date = new Date(message.timestamp);
  // var dateString = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
  var time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
  console.log(time);

  var ref = db.ref('device/' + message.deviceId);
  ref.set({
    temperature: temperature,
    humidity: humidity,
    timestamp: time,
  });
}

module.exports = { updateFirebase };
