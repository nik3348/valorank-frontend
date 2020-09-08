<template>
  <div>
    <b-navbar class="nav-bar" toggleable="lg" type="dark">
      <b-navbar-brand href="#">
        <img :src="require('../assets/logo.png')" class="logo d-inline-block align-top" alt="Kitten">
        VALORANK
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">LINK</b-nav-item>
          <b-nav-item href="#" disabled>DISABLED</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"><b-icon-search/></b-button>
          </b-nav-form>

          <b-nav-item-dropdown text="LANG" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>USER</em>
            </template>
            <b-dropdown-item href="#">PROFILE</b-dropdown-item>
            <b-dropdown-item href="#">SIGN OUT</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'TheNavBar'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

.logo {
  width: 35px;
}
.nav-bar {
  background-color: #2c3e50;
  font-family: 'Anton', sans-serif;
}
</style>
