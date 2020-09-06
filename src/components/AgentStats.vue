<template>
  <b-col>
    <b-row class="stats" align-v="center" v-for="agent in agents" v-bind:key="agent.id">
      <img class="agentIcon" :src="require('../assets/agents/' + agent.name + '.png')" alt="agent">
      <b-col class="name p-0">
        {{ agent.name }}
        <br>
        {{ agent.combatScore }}
      </b-col>
      <b-col class="p-0" >
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
  </b-col>
</template>

<script>
export default {
  name: 'AgentStats',
  data () {
    return {
      agents: [
        {
          id: 1,
          name: 'phoenix',
          kills: 10,
          deaths: 10,
          assists: 10,
          wins: 5,
          loses: 1,
          combatScore: 3000
        },
        {
          id: 2,
          name: 'jett',
          kills: 6.6,
          deaths: 3.8,
          assists: 5.7,
          wins: 1222,
          loses: 1,
          combatScore: 2000
        },
        {
          id: 3,
          name: 'brimstone',
          kills: 6.6,
          deaths: 3.8,
          assists: 5.7,
          wins: 5,
          loses: 1,
          combatScore: 2350
        }
      ]
    }
  },
  methods: {
    getKDAR: function (agent) {
      return Math.round(((agent.kills + agent.assists) / agent.deaths) * 100) / 100
    },
    getWinRatio: function (agent) {
      return Math.round((agent.wins * 100 / (agent.loses + agent.wins)) * 10) / 10
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');

.agentIcon {
  width: 55px;
  margin: 5px;
}
.stats {
  background-color: lightgray;
  text-align: center;
  font-size: 15px;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: bold;
  width: 340px;
  border-style: groove;
  margin: 2px 0;
}
.name {
  text-align: start;
}

</style>
