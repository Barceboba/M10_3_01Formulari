<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.svg" width=200px>
    <Formulari></Formulari>
  </div>
</template>

<script>
import Formulari from './components/Formulari.vue'

export default {
  name: 'App',
  components: {
    Formulari
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
