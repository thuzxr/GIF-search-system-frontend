<template>
  <div>
    <TopNavBar></TopNavBar>
    <Login></Login>
  </div>
</template>

<script>
import TopNavBar from '../components/TopNavBar.vue'
import Login from '../components/Login.vue'
export default {
  name: 'Manage',
  components: {
    TopNavBar,
    Login
  }
}
</script>

<style>
</style>
