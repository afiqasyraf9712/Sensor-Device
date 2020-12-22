import firebase from 'firebase/app';
import 'firebase/database';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: 'AIzaSyBf7lydFnMf8rOa3Ep_Xu7aPZ21dVzYTM4',
  authDomain: 'temperature-sensor-c10f0.firebaseapp.com',
  databaseURL: 'https://temperature-sensor-c10f0-default-rtdb.firebaseio.com',
  projectId: 'temperature-sensor-c10f0',
  storageBucket: 'temperature-sensor-c10f0.appspot.com',
  messagingSenderId: '369855517683',
  appId: '1:369855517683:web:40bfa45d0dc277019cb886',
  measurementId: 'G-GNML5B8WTW',
};
firebase.initializeApp(config);
var db = firebase.database();
const device = db.ref('device');

export { db, device };
