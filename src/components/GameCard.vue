<template>
  <b-row align-v="center" class="game-card">
    <b-col class="ml-3" cols="1">
      {{ game.gamemode }}
      <br/>
      {{ game.wins }} - {{ game.loses }}
      <span v-bind:class="[isWin() ? 'victory' : 'defeat']">{{ isWin() ? 'Victory' : 'Defeat' }}</span>
    </b-col>
    <b-col cols="1">
      <img :src="require('../assets/agents/' + game.agent + '.png')" alt="agent" class="agentIcon">
    </b-col>
    <b-col class="name">
      {{ capitalizeFirstLetter(game.agent) }}
    </b-col>
    <img
      v-for="player in game.friend"
      v-bind:key="player"
      :src="require('../assets/agents/' + player + '.png')"
      alt="agent"
      class="agentIcon"
    >
    <span>vs</span>
    <img
      v-for="player in game.enemy"
      v-bind:key="player"
      :src="require('../assets/agents/' + player + '.png')"
      alt="agent"
      class="agentIcon"
    >
    <img :src="require('../assets/pop-up-icon.png')" alt="pop-up" class="icon">
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
  color: white;
  background-color: #2b3e54;
  border-color: #2b3e54;
  text-align: center;
  font-size: 15px;
  border-style: groove;
  border-top-width: 0;
  border-left-width: 0;
  margin: 0;
  border-radius: 4px;
  transition: all .2s ease
}

.game-card:hover {
  background-color: #324861;
  border-color: #324861;
  transform: translateX(-5px);
}

.game-card:active {
  transform: scale(.99);
}

.name {
  text-align: start;
}

.agentIcon {
  width: 50px;
  margin: 5px;
}

.victory {
  color: #2fba12;
}

.defeat {
  color: #ff4655;
}

.icon {
  margin: 5px;
  width: 20px;
}
</style>
