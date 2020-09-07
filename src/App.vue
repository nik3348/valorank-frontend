<template>
  <b-row id="app">
    <b-col cols="2"/>
    <b-col>
      <div class="cover">
        <router-view/>
      </div>
    </b-col>
    <b-col cols="2"/>
  </b-row>
</template>

<script>
export default {
  name: 'App'
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
  color: #2c3e50;
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
  padding-top: 60px;
  background-color: rgba(33,46,62, 0.85);
  height: 100vh;
}
</style>
