<template>
  <b-col class="p-0">
    <GameCard v-bind:game="game" v-for="game in games" v-bind:key="game.name"/>
  </b-col>
</template>

<script>
import GameCard from './GameCard'

export default {
  name: 'GameList',
  components: {
    GameCard
  },
  data () {
    return {
      games: [
        {
          gamemode: 'Rated',
          wins: 13,
          loses: 4,
          agent: 'jett',
          friend: ['cypher', 'phoenix', 'viper', 'brimstone'],
          enemy: ['breach', 'phoenix', 'omen', 'brimstone', 'jett']
        },
        {
          gamemode: 'Unrated',
          wins: 16,
          loses: 14,
          agent: 'jett',
          friend: ['killjoy', 'phoenix', 'sage', 'cypher'],
          enemy: ['reyna', 'raze', 'cypher', 'brimstone', 'jett']
        },
        {
          gamemode: 'Rated',
          wins: 9,
          loses: 13,
          agent: 'breach',
          friend: ['reyna', 'raze', 'cypher', 'jett'],
          enemy: ['jett', 'phoenix', 'omen', 'breach', 'killjoy']
        },
        {
          gamemode: 'Rated',
          wins: 3,
          loses: 13,
          agent: 'jett',
          friend: ['breach', 'phoenix', 'omen', 'killjoy'],
          enemy: ['cypher', 'killjoy', 'sage', 'brimstone', 'jett']
        },
        {
          gamemode: 'Rated',
          wins: 12,
          loses: 13,
          agent: 'phoenix',
          friend: ['omen', 'cypher', 'jett', 'killjoy'],
          enemy: ['cypher', 'killjoy', 'reyna', 'brimstone', 'jett']
        },
        {
          gamemode: 'Rated',
          wins: 13,
          loses: 6,
          agent: 'brimstone',
          friend: ['breach', 'phoenix', 'killjoy', 'jett'],
          enemy: ['cypher', 'omen', 'sage', 'breach', 'jett']
        },
        {
          gamemode: 'Rated',
          wins: 13,
          loses: 8,
          agent: 'omen',
          friend: ['jett', 'cypher', 'brimstone', 'killjoy'],
          enemy: ['phoenix', 'killjoy', 'sage', 'cypher', 'jett']
        },
        {
          gamemode: 'Rated',
          wins: 13,
          loses: 2,
          agent: 'jett',
          friend: ['breach', 'brimstone', 'omen', 'killjoy'],
          enemy: ['cypher', 'jett', 'reyna', 'killjoy', 'phoenix']
        }
      ]
    }
  }
}
</script>
