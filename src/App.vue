<template>
  <div id="app">
    <router-view />
    <br />
    <br />
    <br />
    <br />
    <Visualisation></Visualisation>
  </div>
</template>
<script>
/* eslint-disable */
import Visualisation from './components/Visualisation.vue';

export default {
  name: 'app',
  components: {
    Visualisation,
  },
};
</script>
<style lang="scss">
body {
  background: #f2f2f2;
}

.center {
  margin: auto;
  width: 80%;
  border: 3px solid green;
  padding: 20px;
  background: #e6ffe6;
}

.inline {
  list-style: none;
  margin: 0;
  padding: 0;
  align: center;

  li {
    display: inline-block;
  }
}

h1 {
  margin: 20px;
  width: 300px;
}

h3 {
  width: 500px;
  margin: 0 auto;
  padding-bottom: 10px;
  text-align: center;
}

h4 {
  width: 500px;
  margin: 0 auto;
  text-align: center;
}

.line {
  border: 5px solid #1a1a1a;
}

.graph {
  width: 80%;
  margin: auto;
}
</style>
