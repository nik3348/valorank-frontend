<template>
  <b-col class="p-0">
    <GameCard v-for="game in games" v-bind:key="game.name" v-bind:game="game"/>
    <b-button/>
  </b-col>
</template>

<script>
import GameCard from './GameCard'

// TODO: Add button to fetch more results
// TODO: Add surrender results
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
          score: 1234,
          mmvp: false,
          tmvp: false,
          kills: 30,
          deaths: 20,
          assists: 10,
          map: 'ascent',
          agent: 'jett',
          friend: ['cypher', 'phoenix', 'viper', 'brimstone'],
          enemy: ['breach', 'phoenix', 'omen', 'brimstone', 'jett']
        },
        {
          gamemode: 'Unrated',
          wins: 16,
          loses: 14,
          score: 4132,
          mmvp: false,
          tmvp: false,
          kills: 18,
          deaths: 20,
          assists: 1,
          map: 'bind',
          agent: 'jett',
          friend: ['killjoy', 'phoenix', 'sage', 'cypher'],
          enemy: ['reyna', 'raze', 'cypher', 'brimstone', 'jett']
        },
        {
          gamemode: 'Rated',
          wins: 9,
          loses: 13,
          score: 2341,
          mmvp: false,
          tmvp: true,
          kills: 21,
          deaths: 25,
          assists: 17,
          map: 'haven',
          agent: 'breach',
          friend: ['reyna', 'raze', 'cypher', 'jett'],
          enemy: ['jett', 'phoenix', 'omen', 'breach', 'killjoy']
        },
        {
          gamemode: 'Rated',
          wins: 3,
          loses: 13,
          score: 4141,
          mmvp: true,
          tmvp: true,
          kills: 1,
          deaths: 1,
          assists: 1,
          map: 'split',
          agent: 'jett',
          friend: ['breach', 'phoenix', 'omen', 'killjoy'],
          enemy: ['cypher', 'killjoy', 'sage', 'brimstone', 'jett']
        },
        {
          gamemode: 'Rated',
          wins: 12,
          loses: 13,
          score: 3414,
          mmvp: false,
          tmvp: true,
          kills: 21,
          deaths: 1,
          assists: 2,
          map: 'haven',
          agent: 'phoenix',
          friend: ['omen', 'cypher', 'jett', 'killjoy'],
          enemy: ['cypher', 'killjoy', 'reyna', 'brimstone', 'jett']
        },
        {
          gamemode: 'Rated',
          wins: 13,
          loses: 6,
          score: 1341,
          mmvp: false,
          tmvp: false,
          kills: 5,
          deaths: 1,
          assists: 11,
          map: 'split',
          agent: 'brimstone',
          friend: ['breach', 'phoenix', 'killjoy', 'jett'],
          enemy: ['cypher', 'omen', 'sage', 'breach', 'jett']
        },
        {
          gamemode: 'Rated',
          wins: 13,
          loses: 8,
          score: 1341,
          mmvp: true,
          tmvp: true,
          kills: 13,
          deaths: 31,
          assists: 13,
          map: 'ascent',
          agent: 'omen',
          friend: ['jett', 'cypher', 'brimstone', 'killjoy'],
          enemy: ['phoenix', 'killjoy', 'sage', 'cypher', 'jett']
        },
        {
          gamemode: 'Rated',
          wins: 13,
          loses: 2,
          score: 3411,
          mmvp: false,
          tmvp: true,
          kills: 21,
          deaths: 12,
          assists: 31,
          map: 'haven',
          agent: 'jett',
          friend: ['breach', 'brimstone', 'omen', 'killjoy'],
          enemy: ['cypher', 'jett', 'reyna', 'killjoy', 'phoenix']
        }
      ]
    }
  }
}
</script>
