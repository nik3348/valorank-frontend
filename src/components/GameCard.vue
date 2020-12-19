<template>
  <b-row align-v="center" class="game-card" no-gutters>
    <b-col cols="*">
      <div class="tinge secondaryColor">{{ capitalizeFirstLetter(game.map) }}</div>
    </b-col>
    <b-col class="mx-2 p-0" cols="1">
      <span :class="[isWin() ? 'victory' : 'defeat']">{{ game.gamemode }}</span>
      <br/>
      <span :style="{opacity: isWin() ? 1 : 0.6}">{{ game.wins }}</span>
      <span style="opacity: 0.6">-</span>
      <span :style="{opacity: isWin() ? 0.6 : 1}">{{ game.loses }}</span>
      <br/>
      <span :class="[isWin() ? 'victory' : 'defeat']">{{ isWin() ? 'Victory' : 'Defeat' }}</span>
    </b-col>
    <b-col class="p-0" cols="*">
      <img :src="require('../assets/agents/' + game.agent + '.png')" alt="agent" class="agentIcon">
    </b-col>
    <b-col class="kda pl-2" cols="*">
      <span v-b-tooltip.hover title="KDA">{{ game.kills }} / {{ game.deaths }} / {{ game.assists }}</span>
      <b-badge v-b-tooltip.hover title="Match MVP" v-if="game.mmvp" variant="danger">M-MVP</b-badge>
      <b-badge v-b-tooltip.hover title="Team MVP" v-else-if="game.tmvp" variant="warning">T-MVP</b-badge>
    </b-col>
    <b-col
      cols="*"
      v-for="player in game.friend"
      :key="player"
    >
      <img
        :src="require('../assets/agents/' + player + '.png')"
        alt="agent"
        class="agentIcon"
      >
    </b-col>
    <b-col cols="*" class="m-1 text-center"><span>vs</span></b-col>
    <b-col
      cols="*"
      v-for="player in game.enemy"
      :key="player"
    >
      <img
        :src="require('../assets/agents/' + player + '.png')"
        alt="agent"
        class="agentIcon"
      >
    </b-col>
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
  color: #fcd077;
  background-color: #2b3e54;
  border-color: #2b3e54;
  text-align: center;
  font-size: 0.8vw;
  margin: 0 0 7px;
  border-radius: 4px;
  height: 4.25vw;
  transition: all .2s ease;
  overflow: hidden;
  padding-right: 5px;
}

.game-card:hover {
  background-color: #324861;
  border-color: #324861;
  transform: translateX(-3px);
}

.game-card:active {
  transform: scale(.99);
}

.tinge {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  background-repeat: no-repeat;
  background-position: center;
}

.kda {
  text-align: start;
  width: 5vw;
}

.secondaryColor {
  color: rgba(252, 208, 119, 0.6);
}

.agentIcon {
  height: 3.5vw;
  margin: 2px;
}

.victory {
  color: #2fba12;
}

.defeat {
  color: #ff4655;
}

.score {
  opacity: 0.5;
}

@media only screen and (min-width: 1200px) {
  .agentIcon {
    height: 3.25vw;
  }
}

@media only screen and (min-width: 1400px) {
  .agentIcon {
    height: 2.8vw;
  }
}

@media only screen and (min-width: 1600px) {
  .agentIcon {
    height: 2.6vw;
  }
}

@media only screen and (min-width: 1800px) {
  .agentIcon {
    height: 2.4vw;
  }
}

@media only screen and (min-width: 2000px) {
  .agentIcon {
    height: 2.2vw;
  }
}

@media only screen and (min-width: 2200px) {
  .agentIcon {
    height: 2.1vw;
  }
}

@media only screen and (min-width: 2400px) {
  .agentIcon {
    height: 1.9vw;
  }
}
</style>
