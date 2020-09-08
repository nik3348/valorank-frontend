<template>
  <b-row>
    <b-col cols="2" md="auto" class="pr-1 pl-5">
      <RankCard/>
      <AgentList/>
    </b-col>
    <b-col class="pl-1 pr-5">
      <GameList/>
    </b-col>
  </b-row>
</template>

<script>
import AgentList from '../components/AgentList'
import RankCard from '../components/RankCard'
import GameList from '../components/GameList'

export default {
  name: 'MainPage',
  components: {
    AgentList,
    RankCard,
    GameList
  }
}
</script>

<style scoped>

</style>
