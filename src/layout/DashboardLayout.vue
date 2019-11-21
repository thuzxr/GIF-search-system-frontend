<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar
      :background-color="sidebarBackground"
      short-title="gif-dio"
      title="gif-dio"
    >
      <template slot="links">
        <sidebar-item :link="{name: 'Search', icon: 'ni ni-world text-primary', path: '/search'}"/>
        <!--sidebar-item :link="{name: 'Icons', icon: 'ni ni-planet text-blue', path: '/icons'}"-->
        <sidebar-item :link="{name: 'User Profile', icon: 'ni ni-single-02 text-yellow', path: '/profile'}"/>
        <sidebar-item :link="{name: 'Upload', icon: 'ni ni-cloud-upload-96 text-green', path: '/upload'}"/>
        <sidebar-item :link="{name: 'Recommend', icon: 'ni ni-image text-orange', path: '/recommend'}"/>
        <sidebar-item :link="{name: 'Theme', icon: 'ni ni-atom text-purple', path: '/theme'}"/>
        <sidebar-item :link="{name: 'Favourites', icon: 'ni ni-favourite-28 text-red', path: '/favourites'}"/>

      </template>
    </side-bar>
    <div class="main-content" :data="sidebarBackground">
    <notifications></notifications>
      <dashboard-navbar></dashboard-navbar>

      <div @click="toggleSidebar">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </fade-transition>
        <content-footer v-if="!$route.meta.hideFooter"></content-footer>
      </div>
    </div>
  </div>
</template>
<script>
import DashboardNavbar from './DashboardNavbar.vue'
import ContentFooter from './ContentFooter.vue'
import { FadeTransition } from 'vue2-transitions'

export default {
  components: {
    DashboardNavbar,
    ContentFooter,
    FadeTransition
  },
  data () {
    return {
      sidebarBackground: 'blue' // vue|blue|orange|green|red|primary
    }
  },
  methods: {
    toggleSidebar () {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false)
      }
    }
  }
}
</script>
<style lang="scss">
</style>
