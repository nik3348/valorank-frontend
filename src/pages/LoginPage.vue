<template>
  <b-col>
    <b-container class="login-card">
      <b-row>
        <div class="label-box">
          <b-col class="px-5">
            <!--            <b-row class="title">&nbsp;</b-row>-->
            <!--            <b-row class="labels" align-v="center">USERNAME</b-row>-->
            <!--            <b-row class="labels" align-v="center">PASSWORD</b-row>-->
          </b-col>
        </div>
        <div class="login">
          <b-row>
            <b-col>
              <div class="title">LOGIN</div>
              <div class="line">&nbsp;</div>
              <b-form-input id="input-small" class="labels input" size="sm" placeholder="USERNAME" trim required/>
              <b-form-input id="input-small" class="labels input" size="sm" placeholder="PASSWORD" trim required/>
              <div class="link">
                <b-link href="https://google.com" class="link">Forgot password?</b-link>
              </div>
              <b-row class="m-0" align-h="center">
                <b-button class="button" variant="danger">LOGIN</b-button>
              </b-row>
            </b-col>
          </b-row>
          <div class="register">Don't have an account?
            <b-link href="https://google.com" class="register-link">Register here</b-link>
          </div>
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
  font-weight: lighter;
  background-color: rgb(33, 46, 62);;
  border-radius: 4px;
  width: 800px;
  height: 550px;
  margin-top: 200px;
  overflow: hidden;
}

.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 550px;
  padding: 10px;
}

.label-box {
  background-color: #ff4654;
  background-image: url("../assets/Vertical_jett.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 300px;
  height: 550px;
}

.title {
  color: #ff4654;
  font-size: 60px;
  text-align: start;
}

.labels {
  font-size: 25px;
  margin-top: 20px;
}

.input {
  color: #212529;
  margin-bottom: 10px;
}

.button {
  margin-top: 15px;
  width: 100%;
}

.link {
  font-size: 15px;
  margin-top: 10px;
  align-items: end;
  text-align: end;
  color: white;
  opacity: 50%;
}

.line {
  background-color: #ff4654;
  width: 450px;
  height: 5px;
}

.register {
  padding: 10px;
  color: rgba(255, 255, 255, 0.25);
  font-size: 14px;
  transform: translate(0%, 225%);
}

.register-link {
  color: rgba(255, 70, 84, 0.9);
}
</style>
