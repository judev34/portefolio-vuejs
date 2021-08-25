<template>
  <div id="app">
    <layout-navigation></layout-navigation>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <layout-footer></layout-footer>
  </div>
</template>

<script>
import TheFooterVue from './components/layout/TheFooter.vue'
import TheNavigationVue from './components/layout/TheNavigation.vue'

export default {
  name: 'App',
  components: {
    'layout-navigation': TheNavigationVue,
    'layout-footer': TheFooterVue
  }
}
</script>

<style scoped>

#app {
  min-height:100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
