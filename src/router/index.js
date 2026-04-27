import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import DocsViews from '@/views/DocsViews.vue'
import ExamplesView from '@/views/ExamplesView.vue'
import PlaygroundView from '@/views/PlaygroundView.vue'
import BlogView from '@/views/BlogView.vue'


const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/Docs',
    name: 'DocsView',
    component: DocsViews
  },
  {
    path: '/Examples',
    name: 'ExamplesView',
    component: ExamplesView
  },
  {
    path: '/Playground',
    name: 'PlaygroundView',
    component: PlaygroundView
  },
  {
    path: '/Blog',
    name: 'BlogView',
    component: BlogView
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
