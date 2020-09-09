<template>
  <b-row align-v="center" class="game-card">
    <div class="tinge secondaryColor">{{ capitalizeFirstLetter(game.map) }}</div>
    <b-col class="results p-0">
      <span v-bind:class="[isWin() ? 'victory' : 'defeat']">{{ game.gamemode }}</span>
      <br/>
      <span class="score">{{ game.wins }} - {{ game.loses }}</span>
      <br/>
      <span v-bind:class="[isWin() ? 'victory' : 'defeat']">{{ isWin() ? 'Victory' : 'Defeat' }}</span>
    </b-col>
    <b-col class="p-0" md="auto">
      <img :src="require('../assets/agents/' + game.agent + '.png')" alt="agent" class="agentIcon">
    </b-col>
    <b-col class="kda">
      <b-row class="px-2">
        <span v-b-tooltip.hover title="KDA">{{ game.kills }} / {{ game.deaths }} / {{ game.assists }}</span>
      </b-row>
      <b-row class="px-2" align-h="between">
        <span v-if="game.mmvp" class="mvp">M-MVP</span>
        <span v-else-if="game.tmvp" class="mvp">T-MVP</span>
      </b-row>
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
  color: #fcd077;
  background-color: #2b3e54;
  border-color: #2b3e54;
  text-align: center;
  font-size: 13px;
  margin: 0 0 7px;
  border-radius: 4px;
  height: 80px;
  transition: all .2s ease
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
  display: inline-block;
  width: 20px;
  height: 80px;
  border-radius: 4px 0 0 4px;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  background-repeat: no-repeat;
  background-position: center;
}

.kda {
  text-align: start;
  width: 110px;
}

.secondaryColor {
  color: rgba(252, 208, 119, 0.6);
}

.mvp {
  color: white;
}

.results {
  width: 55px;
}

.agentIcon {
  height: 50px;
  margin: 2px;
}

.victory {
  color: #2fba12;
}

.defeat {
  color: #ff4655;
}

.icon {
  margin: 0 5px;
  width: 20px;
}
</style>
