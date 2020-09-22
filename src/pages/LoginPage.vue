<template>
  <b-col>
    <b-container fluid class="login-card">
      <b-row>
        <div class="label-box"/>
        <div class="login">
          <b-row>
            <b-form @submit="onSubmit">
              <b-col>
                <div class="title">LOGIN</div>
                <div class="line">&nbsp;</div>
                <b-form-input
                  type="text"
                  id="input-small"
                  class="labels input"
                  size="sm"
                  v-model="form.username"
                  placeholder="USERNAME"
                  trim required/>
                <b-form-input
                  type="password"
                  class="labels input"
                  size="sm"
                  v-model="form.password"
                  placeholder="PASSWORD"
                  trim required/>
                <div class="link">
                  <b-link href="forgot-password" class="link">Forgot password?</b-link>
                </div>
                <b-row class="m-0" align-h="center">
                  <b-button type="submit" class="button" variant="danger">LOGIN</b-button>
                </b-row>
              </b-col>
            </b-form>
          </b-row>
          <div class="register">Don't have an account?
            <b-link href="register" class="register-link">Register here</b-link>
          </div>
        </div>
      </b-row>
    </b-container>
  </b-col>
</template>

<script>
const apis = require('../apis')

export default {
  name: 'LoginPage',
  data () {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.form)
      }
      fetch(apis.login, requestOptions)
        .then(response => response.json())
        .then(data => {
          let isAdmin = data.user.isAdmin
          this.$emit('authenticated', true)
          localStorage.setItem('user', JSON.stringify(data.user))
          localStorage.setItem('jwt', data.token)

          if (localStorage.getItem('jwt') != null) {
            if (this.$route.params.nextUrl != null) {
              this.$router.push(this.$route.params.nextUrl)
            } else {
              if (isAdmin) {
                this.$router.push('admin')
              } else {
                this.$router.push('/')
              }
            }
          } else {
            alert('error missing jwt')
          }
        })
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

.login-card {
  font-family: 'Anton', sans-serif;
  font-weight: lighter;
  background-color: rgb(33, 46, 62);;
  border-radius: 4px;
  transform: translate(0%, 40%);
  overflow: hidden;
}

.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 27.5vw;
  padding: 1vw;
}

.label-box {
  background-color: #ff4654;
  background-image: url("../assets/Vertical_jett.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 15vw;
}

.title {
  color: #ff4654;
  font-size: 3vw;
  text-align: start;
}

.labels {
  font-size: 1.25vw;
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
  font-size: 0.75vw;
  margin-top: 10px;
  align-items: end;
  text-align: end;
  color: white;
  opacity: 50%;
}

.line {
  background-color: #ff4654;
  width: 25vw;
  height: 5px;
}

.register {
  padding: 10px;
  color: rgba(255, 255, 255, 0.25);
  font-size: 0.75vw;
  transform: translate(0%, 4vw);
}

.register-link {
  color: rgba(255, 70, 84, 0.9);
}
</style>
