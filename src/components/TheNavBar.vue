<template>
  <div>
    <b-navbar class="nav-bar" toggleable="lg" type="dark">
      <b-navbar-brand href="#">
        <img :src="require('../assets/logo.png')" alt="logo" class="logo d-inline-block align-top">
        VALORANK
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#/">HOME</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input class="mr-sm-2" placeholder="Search" size="sm"></b-form-input>
            <b-button class="my-2 my-sm-0" size="sm" type="submit">
              <b-icon-search/>
            </b-button>
          </b-nav-form>

          <b-nav-item-dropdown right text="LANG">
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <template v-slot:button-content>
              <em>USER</em>
            </template>
            <b-dropdown-item href="#">PROFILE</b-dropdown-item>
            <b-dropdown-item v-on:click="logout">SIGN OUT</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'TheNavBar',
  methods: {
    logout () {
      localStorage.removeItem('jwt')
      localStorage.removeItem('user')
      this.$emit('authenticated', false)
      this.$router.push('login')
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

.logo {
  width: 30px;
}

.nav-bar {
  background-color: #2c3e50;
  font-family: 'Anton', sans-serif;
}
</style>
