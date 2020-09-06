import Vue from 'vue'
import Router from 'vue-router'
import RankCard from '../components/RankCard'
import AgentStats from '../components/AgentStats'

Vue.use(Router)

export default new Router({
  routes: [
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
