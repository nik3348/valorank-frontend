<template>
  <div class='rankCard'>
    <b-row align-v="center">
      <img :src="require('../assets/ranks/' + rank + '.png')" alt="rank" class="rankImage">
      <b-col>
        <div class="gamemode">Rated</div>
        <div class="rank">{{ rankMsg }}</div>
        <div class="msg">{{ wins + 'W ' + loses + 'L' }}</div>
        <div class="msg">Win Ratio {{ getWinRatio() }}%</div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'RankCard',
  data () {
    return {
      rankMsg: 'Radiant',
      rank: 'radiant',
      wins: 974,
      loses: 952
    }
  },
  methods: {
    getWinRatio: function () {
      return Math.round((this.wins * 100 / (this.loses + this.wins)) * 100) / 100
    }
  }
}
</script>

<style scoped>
.rankCard {
  color: white;
  border-color: #2b3e54;
  background-color: #2b3e54;
  text-align: start;
  width: 20vw;
  border-radius: 4px;
}

.rankImage {
  margin-left: 26px;
  margin-right: 5px;
  padding: 19px 5px 19px 15px;
  height: 8.2vw;
}

.gamemode {
  font-size: 0.8vw;
}

.rank {
  color: #ffc925;
  font-size: 1.3vw;
}

.msg {
  font-size: 0.7vw;
}
</style>
