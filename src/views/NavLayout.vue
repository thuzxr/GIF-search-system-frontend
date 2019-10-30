<template>
  <div>
    <top-nav-bar></top-nav-bar>
	<router-view></router-view>
  </div>
</template>

<script>
import TopNavBar from '../components/TopNavBar.vue'
export default {
  name: 'NavLayout',
  components: {
    'top-nav-bar': TopNavBar
  }
}

</script>
<style>
</style>
