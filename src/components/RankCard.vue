<template>
  <div class='card'>
    <b-row align-v="center">
      <img class="rankImage" :src="require('../assets/ranks/' + rank + '.png')" alt="rank">
      <b-col>
        <div class="gamemode">Rated</div>
        <div class="rank">{{ rankMsg }}</div>
        <div class="msg">{{ wins + "W " + loses + "L" }}</div>
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
      rankMsg: 'Diamond 1',
      rank: 'diamond-1',
      wins: 20,
      loses: 10
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
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');

.card {
  background-color: lightgray;
  text-align: start;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: bold;
  width: 275px;
  border-style: groove;
}
.rankImage {
  margin-left: 15px;
  padding: 19px 0 19px 15px;
  height: 130px;
}
.gamemode {
  font-size: 15px;
}
.rank {
  color: blue;
  font-size: 20px;
}
.msg {
  font-size: 15px;
}
</style>
