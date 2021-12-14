import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path:'', component: r => require.ensure([], () => r(require('../pages/index.vue')), 'index')},
    {path:'/', component: r => require.ensure([], () => r(require('../pages/index.vue')), 'index')},
    {path:'/read', component: r => require.ensure([], () => r(require('../pages/read.vue')), 'read')},
    {path:'/share', component: r => require.ensure([], () => r(require('../pages/share.vue')), 'share')},
    {path:'/message', component: r => require.ensure([], () => r(require('../pages/message.vue')), 'message')},
    {path:'/event', component: r => require.ensure([], () => r(require('../pages/event.vue')), 'event')},
    {path:'/bookmark', component: r => require.ensure([], () => r(require('../pages/bookmark.vue')), 'bookmark')},

  ]
})
