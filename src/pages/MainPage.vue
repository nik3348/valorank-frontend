<template>
  <b-col class="cover" cols="12">
    <b-row>
      <b-col class="banner">
        <ProfileCard/>
      </b-col>
    </b-row>
    <b-row style="padding: 0 4px" no-gutters>
      <b-col class="pr-1" cols="4">
        <RankCard/>
        <AgentList/>
      </b-col>
      <b-col class="pl-1">
        <GameList/>
      </b-col>
    </b-row>
  </b-col>
</template>

<script>
import AgentList from '../components/AgentList'
import RankCard from '../components/RankCard'
import GameList from '../components/GameList'
import ProfileCard from '../components/ProfileCard'

// TODO: Add footer with copyright and riot boilerplate
export default {
  name: 'MainPage',
  components: {
    ProfileCard,
    AgentList,
    RankCard,
    GameList
  }
}
</script>

<style scoped>
.banner {
  padding: 0 19px;
  width: 100%;
}

.cover {
  padding-top: 15px;
  background-color: rgba(33, 46, 62, 0.85);
  height: 100%;
}
</style>
