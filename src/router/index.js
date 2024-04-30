import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import DefaultLayout from '@/views/layouts/DefaultLayout.vue'
import TeamView from '@/views/TeamView.vue'
import ChampionView from '@/views/ChampionView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView
        },
        {
          path: '/team',
          name: 'team',
          component: TeamView
        },
        {
          path: '/champion/:name?',
          name: 'champion',
          component: ChampionView
        }
      ]
    }
  ]
})

export default router
