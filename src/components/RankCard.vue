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
      rankMsg: 'RADIANT',
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
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

.rankCard {
  background-color: lightgray;
  text-align: start;
  width: 340px;
  border-style: groove;
  border-radius: 4px;
}

.rankImage {
  margin-left: 26px;
  margin-right: 10px;
  padding: 19px 5px 19px 15px;
  height: 130px;
}

.gamemode {
  font-size: 15px;
}

.rank {
  color: blue;
  font-size: 20px;
  font-family: 'Anton', sans-serif;
  font-weight: lighter;
}

.msg {
  font-size: 15px;
}
</style>
