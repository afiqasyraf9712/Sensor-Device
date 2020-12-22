<template>
  <div>
    <h1>Historical Data</h1>
    <div class="graph">
      <chart :chart-data="datacollection1"></chart>
      <chart :chart-data="datacollection2"></chart>
      <chart :chart-data="datacollection3"></chart>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import Chart from './../Chart.js';
export default {
  components: {
    Chart,
  },
  data() {
    return {
      datacollection1: null,
      datacollection2: null,
      datacollection3: null,
      times: [
        '-',
        '-',
        '-',
        '-',
        '-',
        '-',
        '-',
        '-',
        '-',
        '-',
        '-',
        '-',
        '-',
        '-',
        '-',
        '-',
        '-',
        '-',
        '-',
        '-',
      ],
    };
  },
  mounted() {
    this.fillData();
  },
  computed: {},
  methods: {
    fillData() {
      console.log(this.$store.state.dummy);
      const timestamp = Date.now();
      const now = new Date(timestamp);
      const time = now.getHours() + ':' + now.getMinutes() + ':' + (now.getSeconds() - 5);
      console.log(time);
      this.times.unshift(time);
      this.datacollection1 = {
        labels: [
          this.times[0],
          this.times[1],
          this.times[2],
          this.times[3],
          this.times[4],
          this.times[5],
          this.times[6],
          this.times[7],
          this.times[8],
          this.times[9],
          this.times[10],
          this.times[11],
          this.times[12],
          this.times[13],
          this.times[14],
          this.times[15],
          this.times[16],
          this.times[17],
          this.times[18],
          this.times[19],
        ],
        datasets: [
          {
            label: 'Device-1-Temperature',
            backgroundColor: '#f87979',
            data: this.$store.state.hdata1temp,
          },
          {
            label: 'Device-1-Humidity',
            backgroundColor: '#f0a66b',
            data: this.$store.state.hdata1humid,
          },
        ],
      };
      this.datacollection2 = {
        labels: [
          this.times[0],
          this.times[1],
          this.times[2],
          this.times[3],
          this.times[4],
          this.times[5],
          this.times[6],
          this.times[7],
          this.times[8],
          this.times[9],
          this.times[10],
          this.times[11],
          this.times[12],
          this.times[13],
          this.times[14],
          this.times[15],
          this.times[16],
          this.times[17],
          this.times[18],
          this.times[19],
        ],
        datasets: [
          {
            label: 'Device-2-Temperature',
            backgroundColor: '#1aa3ea',
            data: this.$store.state.hdata2temp,
          },
          {
            label: 'Device-2-Humidity',
            backgroundColor: '#71f5de',
            data: this.$store.state.hdata2humid,
          },
        ],
      };
      this.datacollection3 = {
        labels: [
          this.times[0],
          this.times[1],
          this.times[2],
          this.times[3],
          this.times[4],
          this.times[5],
          this.times[6],
          this.times[7],
          this.times[8],
          this.times[9],
          this.times[10],
          this.times[11],
          this.times[12],
          this.times[13],
          this.times[14],
          this.times[15],
          this.times[16],
          this.times[17],
          this.times[18],
          this.times[19],
        ],
        datasets: [
          {
            label: 'Device-3-Temperature',
            backgroundColor: '#b985c4',
            data: this.$store.state.hdata3temp,
          },
          {
            label: 'Device-3-Humidity',
            backgroundColor: '#ecd8e7',
            data: this.$store.state.hdata3humid,
          },
        ],
      };
    },
  }, // this.datacollection.datasets[0].data.push(rtemp1.temperature) // this.datacollection.datasets[0].data.push(realtimedata)

  // this.datacollection.datasets[1].data.push(rtemp1.humidity)

  watch: {
    // '$store.state.rtdata1': function() {
    //   console.log(this.$store.state.hdata1temp);
    //   this.datacollection.datasets[0].data
    // },
    '$store.state.rtdata1': function() {
      this.fillData();
    },
  },
};
</script>
<style></style>
