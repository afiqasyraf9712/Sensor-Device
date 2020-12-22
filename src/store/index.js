import Vue from 'vue';
import Vuex from 'vuex';
import * as fb from '../firebase-vue.js';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(Vuex);
Vue.use(VueAxios, axios);

fb.device.on('child_changed', function(snapshot, prevChildKey) {
  var newData = snapshot.val();
  store.commit('setRTData', snapshot);
  store.commit('setHData');
});

const store = new Vuex.Store({
  state: {
    rtdata1: { humidity: 0, temperature: 0, timestamp: 0 },
    rtdata2: { humidity: 0, temperature: 0, timestamp: 0 },
    rtdata3: { humidity: 0, temperature: 0, timestamp: 0 },
    hdata1temp: null,
    hdata1humid: null,
    hdata2temp: null,
    hdata2humid: null,
    hdata3temp: null,
    hdata3humid: null,
    hdata1time: null,
    hdata2time: null,
    hdata3time: null,
    dummy: [1, 2, 3],
  },
  mutations: {
    setRTData(state, val) {
      var data = val.val();
      if (val.key === 'dummy-temp-1') {
        state.rtdata1 = data;
      }

      if (val.key === 'dummy-temp-2') {
        state.rtdata2 = data;
      }

      if (val.key === 'dummy-temp-3') {
        // console.log(val.key);
        state.rtdata3 = data;
      }
    },
    setHData(state) {
      Vue.axios.get('http://localhost:5000/').then(response => {
        var results = response.data;
        console.log(results);
        for (const result in results) {
          if (result === '0') {
            state.hdata1 = results[result];
            console.log(state.hdata1);

            var arr1 = results[result];
            var temps1 = [];
            var humids1 = [];
            var times1 = [];
            arr1.forEach(obj => {
              temps1.push(obj.temperature);
              humids1.push(obj.humidity);
              times1.push(obj.time);
            });
            state.hdata1temp = temps1;
            state.hdata1humid = humids1;
            state.hdata1time = times1;
            // console.log('device 1');
            // console.log(state.hdata1temp);
            // console.log(state.hdata1humid);
            console.log(state.hdata1time);
          }

          if (result === '1') {
            state.hdata2 = results[result];
            console.log(state.hdata2);

            var arr2 = results[result];
            var temps2 = [];
            var humids2 = [];
            var times2 = [];
            arr2.forEach(obj => {
              temps2.push(obj.temperature);
              humids2.push(obj.humidity);
              times2.push(obj.time);
            });
            state.hdata2temp = temps2;
            state.hdata2humid = humids2;
            state.hdata2time = times2;
            // console.log('device 2');
            // console.log(state.hdata2temp);
            // console.log(state.hdata2humid);
            // console.log(state.hdata2time);
          }

          if (result === '2') {
            state.hdata3 = results[result];
            console.log(state.hdata3);

            var arr3 = results[result];
            var temps3 = [];
            var humids3 = [];
            var times3 = [];
            arr3.forEach(obj => {
              temps3.push(obj.temperature);
              humids3.push(obj.humidity);
              times3.push(obj.time);
            });
            state.hdata3temp = temps3;
            state.hdata3humid = humids3;
            state.hdata3time = times3;
            // console.log('device 3');
            // console.log(state.hdata3temp);
            // console.log(state.hdata3humid);
            // console.log(state.hdata3time);
          }
        }
      });
    },
  },
  actions: {},
  modules: {},
});

export default store;
