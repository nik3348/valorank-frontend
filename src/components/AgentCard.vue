<template>
  <b-row align-v="center" class="stats-card">
    <div class="tinge" :style="{backgroundColor: getAgentColor(agent.name)}"/>
    <img :src="require('../assets/agents/' + agent.name + '.png')" alt="agent" class="agentIcon">
    <b-col class="name p-0">
      <span :style="{color: getAgentColor(agent.name)}">
        {{ capitalizeFirstLetter(agent.name) }}
      </span>
      <br>
      <span class="acs" v-b-tooltip.hover title="Avg Combat Score">
          {{ agent.combatScore }}
      </span>
    </b-col>
    <b-col class="p-0">
      {{ getKDAR(agent) }} : 1 <span class="secondaryColor">KDA</span>
      <br>
      {{ agent.kills }} / {{ agent.deaths }} / {{ agent.assists }}
    </b-col>
    <b-col>
      <span v-b-tooltip.hover :title="'W ' + agent.wins + '-' + agent.loses + ' L'">
        <span class="secondaryColor">WR</span> {{ getWinRatio(agent) }}%
      </span>
      <br>
      {{ agent.wins + agent.loses }} <span class="secondaryColor">Played</span>
    </b-col>
  </b-row>
</template>

<script>
// TODO: Style font colors

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
    },
    getAgentColor: function (agent) {
      switch (agent) {
        case 'jett':
          return '#e5e4e2'
        case 'phoenix':
          return '#f89c4d'
        case 'brimstone':
          return '#c04e13'
        case 'omen':
          return '#6669d0'
        case 'killjoy':
          return '#fade31'
        case 'sova':
          return '#98a594'
        case 'sage':
          return '#45ddb2'
        case 'reyna':
          return '#9f4394'
        case 'cypher':
          return '#e7eade'
        case 'breach':
          return '#c5964e'
      }
    }
  }
}
</script>

<style scoped>
.agentIcon {
  width: 45px;
  margin: 5px;
}

.stats-card {
  background-color: #2b3e54;
  border-color: #2b3e54;
  border-top-width: 0;
  border-left-width: 0;
  /*color: #fcd077;*/
  color: rgba(252, 208, 119, 0.6);
  text-align: center;
  font-size: 15px;
  width: 340px;
  border-style: groove;
  margin: 1px 0;
  border-radius: 4px;
}

/*.secondaryColor {*/
/*  color: #f8a70b;*/
/*  opacity: 50%;*/
/*}*/

.tinge {
  margin-left: 1px;
  display:inline-block;
  width: 3px;
  height: 50px;
  border-radius: 100px;
}

.acs {
  color: #fcd077;
}

.name {
  text-align: start;
}
</style>
