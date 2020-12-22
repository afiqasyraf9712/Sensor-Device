<template>
  <div id="dashboard">
    <h1>Real Time Updates</h1>
    <br />
    <div class="center">
      <ul class="inline">
        <li>
          <h3>Device 1</h3>
          <h4>Temperature: {{ rtdata1.temperature }}</h4>
          <h4>Humidity: {{ rtdata1.humidity }}</h4>
        </li>
        <li>
          <h3>Device 2</h3>
          <h4>Temperature: {{ rtdata2.temperature }}</h4>
          <h4>Humidity: {{ rtdata2.humidity }}</h4>
        </li>
        <li>
          <h3>Device 3</h3>
          <h4>Temperature: {{ rtdata3.temperature }}</h4>
          <h4>Humidity: {{ rtdata3.humidity }}</h4>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Vue from 'vue';
import { Bar } from 'vue-chartjs';

export default {
  extends: Bar,
  data() {
    return {
      results: null,
    };
  },
  computed: {
    ...mapState([
      'rtdata1',
      'rtdata2',
      'rtdata3',
      'hdata1temp',
      'hdata1humid',
      'hdata2temp',
      'hdata2humid',
      'hdata3temp',
      'hdata3humid',
      'hdata1time',
      'hdata2time',
      'hdata3time',
    ]),
  },
  mounted() {},
};
</script>
