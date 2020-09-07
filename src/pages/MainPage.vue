<template>
  <b-col>
    <RankCard/>
    <AgentStats/>
  </b-col>
</template>

<script>
import AgentStats from '../components/AgentStats'
import RankCard from '../components/RankCard'

export default {
  name: 'MainPage',
  components: {
    AgentStats,
    RankCard
  }
}
</script>

<style scoped>

</style>
