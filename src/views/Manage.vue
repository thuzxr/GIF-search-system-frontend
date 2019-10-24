<template>
  <div>
    <TopNavBar></TopNavBar>
    <Upload></Upload>
  </div>
</template>

<script>
import TopNavBar from '../components/TopNavBar.vue'
import Upload from '../components/Upload.vue'
export default {
  name: 'Manage',
  components: {
    TopNavBar,
    Upload
  }
}
</script>

<style>
</style>
