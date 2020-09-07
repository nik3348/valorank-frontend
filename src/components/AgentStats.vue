<template>
  <b-col>
    <b-row class="stats" align-v="center" v-for="agent in agentList" v-bind:key="agent.name">
      <img class="agentIcon" :src="require('../assets/agents/' + agent.name + '.png')" alt="agent">
      <b-col class="name p-0">
        {{ capitalizeFirstLetter(agent.name) }}
        <br>
        <span v-bind:title="'Avg Combat Score'">
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
  </b-col>
</template>

<script>
export default {
  name: 'AgentStats',
  data () {
    return {
      agents: [
        {
          name: 'phoenix',
          kills: 32,
          deaths: 15,
          assists: 12,
          wins: 40,
          loses: 32,
          combatScore: 3256
        },
        {
          name: 'jett',
          kills: 25,
          deaths: 22,
          assists: 13,
          wins: 1222,
          loses: 922,
          combatScore: 3642
        },
        {
          name: 'brimstone',
          kills: 28,
          deaths: 20,
          assists: 11,
          wins: 5,
          loses: 1,
          combatScore: 3550
        },
        {
          name: 'omen',
          kills: 26,
          deaths: 22,
          assists: 8,
          wins: 3,
          loses: 1,
          combatScore: 3456
        },
        {
          name: 'killjoy',
          kills: 24,
          deaths: 28,
          assists: 18,
          wins: 3,
          loses: 1,
          combatScore: 2988
        },
        {
          name: 'sova',
          kills: 15,
          deaths: 8,
          assists: 15,
          wins: 1,
          loses: 0,
          combatScore: 3305
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
    },
    capitalizeFirstLetter (string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }
  },
  computed: {
    agentList () {
      let response = this.agents
      return response.sort(function (a, b) { return (b.wins + b.loses) - (a.wins + a.loses) })
    }
  }
}
</script>

<style scoped>
.agentIcon {
  width: 55px;
  margin: 5px;
}

.stats {
  background-color: lightgray;
  text-align: center;
  font-size: 15px;
  width: 340px;
  border-style: groove;
  margin: 2px 0;
}

.name {
  text-align: start;
}
</style>
