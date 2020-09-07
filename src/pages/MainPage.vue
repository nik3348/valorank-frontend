<template>
  <b-row>
    <b-col>
      <RankCard/>
      <AgentList/>
    </b-col>
    <b-col>
      <H2>Hello World</H2>
    </b-col>
  </b-row>
</template>

<script>
import AgentList from '../components/AgentList'
import RankCard from '../components/RankCard'

export default {
  name: 'MainPage',
  components: {
    AgentList,
    RankCard
  }
}
</script>

<style scoped>

</style>
