<template>
  <div class="profile-card">
    <div class="banner"/>
    <div class="profile-name">
      <h1>{{ name }}</h1>
    </div>
    <div class="edit-icon"/>
  </div>
</template>

<script>
export default {
  name: 'ProfileCard',
  data () {
    return {
      name: 'F U R Y'
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
  padding: 20px;
  text-align: center;
  transition: all .2s ease;
  margin: auto;
}

.banner:hover + .profile-name {
  opacity: 0;
}

.profile-card {
  background-color: lightgray;
  text-align: center;
  font-size: 1vw;
  width: 100%;
  height: 15vw;
  margin: 5px 0;
}

.banner {
  background-image: url('../assets/reyna-banner.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  width: 100%;
  height: 100%;
  filter: blur(3px);
  -webkit-filter: blur(3px);
  transition: all .2s ease
}

.banner:hover {
  filter: blur(0px);
  -webkit-filter: blur(0px);
}

.edit-icon {
  background-image: url('../assets/edit-icon-white.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  background-color: #000000;
  position: absolute;
  right: 40px;
  top: 20px;
  width: 25px;
  height: 25px;
  border-radius: 3px;
}

.edit-icon:hover {
  background-image: url('../assets/edit-icon-black.png');
  background-color: #8c8c8c;
}
</style>
