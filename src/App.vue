<script>
import AppHeader from './components/AppHeader.vue';
import HomePage from './components/pages/HomePage.vue'
export default {
  name: 'Boolfolio',
  components: { AppHeader, HomePage },
}
</script>

<template>
  <!-- header -->
  <AppHeader />
  <!-- header -->

  <main class="container my-5 ">
    <HomePage/>
  </main>

</template>

<style lang='scss' scoped>
/* style here */
</style>