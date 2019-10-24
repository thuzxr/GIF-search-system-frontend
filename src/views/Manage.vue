<template>
  <div>
    <base-nav class="navbar-top navbar-horizontal"
                      containerClasses="px-4 container"
                      background-color="#FFFFFF"
                      expand>
                <router-link slot="brand" class="navbar-brand" to="/">
                    <img src="img/brand/white.png"/>
                </router-link>

                <template v-slot="{closeMenu}">
                    <!-- Collapse header -->
                   <div class="navbar-collapse-header d-md-none">
                        <div class="row">
                            <div class="col-6 collapse-brand">
                            </div>
                            <div class="col-6 collapse-close">
                                <button type="button"
                                        @click="closeMenu"
                                        class="navbar-toggler"
                                        aria-label="Toggle sidenav">
                                    <span></span>
                                    <span></span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <!-- Navbar items -->
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <router-link class="nav-link nav-link-icon" to="/">
                                <i class="ni ni-planet"></i>
                                <span class="nav-link-inner--text">Search</span>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link nav-link-icon" to="/register">
                                <i class="ni ni-circle-08"></i>
                                <span class="nav-link-inner--text">Register</span>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link nav-link-icon" to="/login">
                                <i class="ni ni-key-25"></i>
                                <span class="nav-link-inner--text">Login</span>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link nav-link-icon" to="/profile">
                                <i class="ni ni-single-02"></i>
                                <span class="nav-link-inner--text">Profile</span>
                            </router-link>
                        </li>
                    </ul>
                </template>
            </base-nav>
    <div style="margin-top: 50px;">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
// import TopNavBar from '../components/TopNavBar.vue'
export default {
  name: 'Manage',
  components: {
    // 'top-nav-bar': TopNavBar
  },
  data () {
    return {
      backgroundDiv: {
        backgroundImage: 'url(' + require('../assets/start.jpg') + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      }
    }
  }
}

</script>
<style>
</style>
