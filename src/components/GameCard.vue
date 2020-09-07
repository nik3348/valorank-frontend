<template>
  <b-row class="game-card" align-v="center">
    <b-col class="ml-3" cols="1">
      {{ game.gamemode }}
      <br/>
      {{ game.wins }} - {{ game.loses }}
      <span v-bind:class="[isWin() ? 'victory' : 'defeat']">{{ isWin() ? "Victory" : "Defeat" }}</span>
    </b-col>
    <b-col cols="1">
      <img class="agentIcon" :src="require('../assets/agents/' + game.agent + '.png')" alt="agent">
    </b-col>
    <b-col class="name">
      {{ capitalizeFirstLetter(game.agent) }}
    </b-col>
    <img
      class="agentIcon"
      :src="require('../assets/agents/' + player + '.png')"
      alt="agent"
      v-for="player in game.friend"
      v-bind:key="player"
    >
    <span>vs</span>
    <img
      class="agentIcon"
      :src="require('../assets/agents/' + player + '.png')"
      alt="agent"
      v-for="player in game.enemy"
      v-bind:key="player"
    >
    <img class="icon" :src="require('../assets/pop-up-icon.png')" alt="pop-up">
  </b-row>
</template>

<script>
export default {
  name: 'GameStats',
  props: ['game'],
  methods: {
    capitalizeFirstLetter (string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    },
    isWin () {
      return this.game.wins > this.game.loses
    }
  }
}
</script>

<style scoped>
.game-card {
  background-color: lightgray;
  text-align: center;
  font-size: 15px;
  border-style: groove;
  margin: 0 15px;
}
.name {
  text-align: start;
}
.agentIcon {
  width: 50px;
  margin: 5px;
}
.victory {
  color: blue;
}
.defeat {
  color: red;
}
.icon {
  margin: 5px;
  width: 20px;
}
</style>
