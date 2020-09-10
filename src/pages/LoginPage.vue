<template>
  <b-col>
    <b-container class="login-card">
      <b-row>
        <div class="label-box">
          <b-col class="px-5">
            <b-row class="title">LOGIN</b-row>
            <b-row class="labels">USERNAME</b-row>
            <b-row class="labels">PASSWORD</b-row>
          </b-col>
        </div>
        <div>
          <b-col class="px-5">
            <b-row class="title">&nbsp;</b-row>
            <b-row class="labels input">USERNAME</b-row>
            <b-row class="labels input">PASSWORD</b-row>
          </b-col>
        </div>
      </b-row>
    </b-container>
  </b-col>
</template>

<script>
export default {
  name: 'LoginPage'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

.login-card {
  font-family: 'Anton', sans-serif;
  background-color: rgb(33, 46, 62);;
  border-radius: 25px;
  width: 800px;
  height: 550px;
  margin-top: 200px;
  overflow: hidden;
}

.label-box {
  background-color: #ff4654;
  width: 300px;
  height: 550px;
}

.title {
  font-size: 60px;
  padding: 40px 0;
}

.labels {
  font-size: 25px;
  margin-top: 20px;
}

.input {
  color: #ff4654;
}
</style>
