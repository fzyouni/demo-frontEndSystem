// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './router/routes'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 加载饿了么UI
Vue.use(elementUI)
// 加载路由
Vue.use(VueRouter)
Vue.config.productionTip = false

// 实例化路由
const router = new VueRouter({
  mode: 'history',
  routes
})

// 路由加载前
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    // 把sessionStorage里面存放的用户信息释放掉
    sessionStorage.removeItem('user')
  }
  let user = JSON.parse(sessionStorage.getItem('user'))
  if (!user && to.path !== '/login') {
    next({path: '/login'})
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
  // components: {App},
  // template: '<App/>'
})
