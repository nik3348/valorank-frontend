<template>
  <b-row class="stats-card" align-v="center">
    <img class="agentIcon" :src="require('../assets/agents/' + agent.name + '.png')" alt="agent">
    <b-col class="name p-0">
      {{ capitalizeFirstLetter(agent.name) }}
      <br>
      <span id="acs" v-b-tooltip.hover title="Avg Combat Score">
          {{ agent.combatScore }}
      </span>
    </b-col>
    <b-col class="p-0">
      {{ getKDAR(agent) }} : 1 KDA
      <br>
      {{ agent.kills }} / {{ agent.deaths }} / {{ agent.assists }}
    </b-col>
    <b-col>
      WR {{ getWinRatio(agent) }}%
      <br>
      {{ agent.wins + agent.loses }} Played
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'AgentCard',
  props: ['agent'],
  methods: {
    getKDAR: function (agent) {
      return Math.round(((agent.kills + agent.assists) / agent.deaths) * 100) / 100
    },
    getWinRatio: function (agent) {
      return Math.round((agent.wins * 100 / (agent.loses + agent.wins)) * 10) / 10
    },
    capitalizeFirstLetter (string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }
  }
}
</script>

<style scoped>
.agentIcon {
  width: 55px;
  margin: 5px;
}

.stats-card {
  background-color: lightgray;
  text-align: center;
  font-size: 15px;
  width: 340px;
  border-style: groove;
  margin: 1px 0;
  border-radius: 4px;
}

.name {
  text-align: start;
}
</style>
