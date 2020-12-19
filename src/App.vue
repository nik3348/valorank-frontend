<template>
  <b-col class="p-0">
    <TheNavBar v-if="isAuthenticated()" @authenticated="setAuthenticated"/>
    <b-row id="app" class="justify-content-md-center">
      <b-col class="p-0" md="auto">
          <router-view @authenticated="setAuthenticated"/>
      </b-col>
    </b-row>
  </b-col>
</template>

<script>
import TheNavBar from './components/TheNavBar'

export default {
  name: 'App',
  data () {
    return {
      authenticated: false
    }
  },
  components: {
    TheNavBar
  },
  methods: {
    setAuthenticated (status) {
      this.authenticated = status
    },
    isAuthenticated () {
      return localStorage.getItem('jwt') != null
    }
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
}
</style>
