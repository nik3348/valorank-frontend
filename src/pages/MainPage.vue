<template>
  <b-col class="cover">
    <b-row>
      <b-col class="banner">
        <ProfileCard/>
      </b-col>
    </b-row>
    <b-row style="padding: 0 1px">
      <b-col class="pr-1 pl-3" cols="2" md="auto">
        <RankCard/>
        <AgentList/>
      </b-col>
      <b-col class="pl-1 pr-3">
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
}

.cover {
  padding-top: 15px;
  background-color: rgba(33, 46, 62, 0.85);
  height: 100%;
}
</style>
