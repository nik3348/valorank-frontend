<template>
  <b-col class="p-0">
    <AgentCard v-for="agent in agentList" v-bind:key="agent.name" v-bind:agent="agent"/>
  </b-col>
</template>

<script>
import AgentCard from './AgentCard'

export default {
  name: 'AgentList',
  components: {
    AgentCard
  },
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
        },
        {
          name: 'cypher',
          kills: 13,
          deaths: 8,
          assists: 11,
          wins: 1,
          loses: 0,
          combatScore: 1414
        },
        {
          name: 'breach',
          kills: 2,
          deaths: 2,
          assists: 2,
          wins: 0,
          loses: 1,
          combatScore: 2222
        },
        {
          name: 'reyna',
          kills: 10,
          deaths: 9,
          assists: 2,
          wins: 0,
          loses: 2,
          combatScore: 1333
        },
        {
          name: 'sage',
          kills: 7,
          deaths: 2,
          assists: 11,
          wins: 1,
          loses: 0,
          combatScore: 2142
        }
      ]
    }
  },
  computed: {
    agentList () {
      let response = this.agents
      return response.sort(function (a, b) {
        return (b.wins + b.loses) - (a.wins + a.loses)
      })
    }
  }
}
</script>
