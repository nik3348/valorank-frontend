<template>
  <b-row>
    <b-col md="auto" class="pr-0">
      <RankCard/>
      <AgentList/>
    </b-col>
    <b-col class="pl-0">
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
