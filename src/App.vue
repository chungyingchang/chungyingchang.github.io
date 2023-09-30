<template>
  <NavBar/>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view/>
  <MyFooter/>
</template>

<script>
import NavBar from './components/NavBar.vue'
import MyFooter from './components/MyFooter.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    MyFooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>