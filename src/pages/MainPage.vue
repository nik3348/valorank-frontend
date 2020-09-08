<template>
  <b-col>
    <b-row>
      <b-col class="px-4">
        <ProfileCard/>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="pr-1 pl-4" cols="2" md="auto">
        <RankCard/>
        <AgentList/>
      </b-col>
      <b-col class="pl-1 pr-4">
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

// TODO: Need to add mobile support
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

</style>
