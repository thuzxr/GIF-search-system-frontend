<template>
  <div>
    <top-nav-bar></top-nav-bar>
    <upload-gif></upload-gif>
  </div>
</template>

<script>
import TopNavBar from '../components/TopNavBar.vue'
import Upload from '../components/Upload.vue'
export default {
  name: 'Manage',
  components: {
    'top-nav-bar': TopNavBar,
    'upload-gif': Upload
  }
}

</script>
<style>
</style>
