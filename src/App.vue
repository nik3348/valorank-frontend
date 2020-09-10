<template>
  <b-col class="p-0">
    <TheNavBar/>
    <b-row id="app">
      <b-col/>
      <b-col class="p-0" md="auto">
        <div class="cover">
          <router-view/>
        </div>
      </b-col>
      <b-col/>
    </b-row>
  </b-col>
</template>

<script>
import TheNavBar from './components/TheNavBar'

export default {
  name: 'App',
  components: {
    TheNavBar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');

#app {
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: bold;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

body {
  background-image: url('./assets/background.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  overflow-x: hidden;
  width: 100%
}

.cover {
  padding-top: 15px;
  background-color: rgba(33, 46, 62, 0.85);
  height: 100%;
}
</style>
