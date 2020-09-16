import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '../pages/MainPage'
import LoginPage from '../pages/LoginPage'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('jwt') == null) {
      next({
        path: '/login',
        params: {nextUrl: to.fullPath}
      })
    } else {
      let user = JSON.parse(localStorage.getItem('user'))
      if (to.matched.some(record => record.meta.isAdmin)) {
        if (user.isAdmin === 1) {
          next()
        } else {
          next({name: 'userboard'})
        }
      } else {
        next()
      }
    }
  } else {
    next()
  }
})

export default router
