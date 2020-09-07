import Vue from 'vue'
import Router from 'vue-router'
import RankCard from '../components/RankCard'
import MainPage from '../pages/MainPage'
import AgentList from '../components/AgentList'
import GameList from '../components/GameList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/rank',
      name: 'RankCard',
      component: RankCard
    },
    {
      path: '/agent',
      name: 'AgentList',
      component: AgentList
    },
    {
      path: '/game',
      name: 'GameList',
      component: GameList
    }
  ]
})
