<template> 
  <NavBar class="Nav-bar"/>

  <router-view v-slot="{ Component }">
    <Transition name="fade">
      <component :is="Component" />
    </Transition>
  </router-view>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}

#app {
  background: linear-gradient(45deg, rgba(5, 43, 95, 1) 23%, rgba(19, 140, 157, 1) 35%, rgba(206, 229, 70, 1) 83%);
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
}

/* Transiciones */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
