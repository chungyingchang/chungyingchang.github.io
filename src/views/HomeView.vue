<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style>
.home{
  background-image: url('~@/assets/background.jpg');
  background-size: cover ;  /* Adjust as needed */
  background-repeat: no-repeat; /* Adjust as needed */
  background-position: center center; /* Adjust as needed */
  /* Other background properties as needed */
}
</style>
