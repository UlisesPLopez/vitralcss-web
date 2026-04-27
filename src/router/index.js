import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import DocsViews from '@/views/DocsViews.vue'
import ExamplesView from '@/views/ExamplesView.vue'
import PlaygroundView from '@/views/PlaygroundView.vue'
import BlogView from '@/views/BlogView.vue'


const routes = [
  {
    path: '/vitralcss-web/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/vitralcss-web/Docs',
    name: 'DocsView',
    component: DocsViews
  },
  {
    path: '/vitralcss-web/Examples',
    name: 'ExamplesView',
    component: ExamplesView
  },
  {
    path: '/vitralcss-web/Playground',
    name: 'PlaygroundView',
    component: PlaygroundView
  },
  {
    path: '/vitralcss-web/Blog',
    name: 'BlogView',
    component: BlogView
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
