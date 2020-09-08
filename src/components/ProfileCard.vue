<template>
  <b-row align-h="center" align-v="center" class="profile-card">
    <div class="banner"/>
    <div class="profile-name">
      <h1>{{ name }}</h1>
    </div>
  </b-row>
</template>

<script>
export default {
  name: 'ProfileCard',
  data () {
    return {
      name: 'P a c e r'
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

.profile-name {
  font-family: 'Anton', sans-serif;
  font-style: italic;
  color: white;
  font-weight: bold;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 80%;
  padding: 20px;
  text-align: center;
}

.profile-card {
  background-color: lightgray;
  text-align: center;
  font-size: 15px;
  width: 100%;
  height: 300px;
  border-style: groove;
  margin: 5px 0;
}

.banner {
  background-image: url('../assets/profile-banner.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  width: 100%;
  height: 100%;
  filter: blur(3px);
  -webkit-filter: blur(3px);
}
</style>
