import Vue from 'vue'
import Router from 'vue-router'
import RankCard from '../components/RankCard'
import AgentStats from '../components/AgentStats'
import MainPage from '../pages/MainPage'

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
      name: 'AgentStats',
      component: AgentStats
    }
  ]
})
