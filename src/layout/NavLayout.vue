<template>
  <div class="main-content">
          <base-header class="header d-flex align-items-center"
                 style="min-height: 88px; background-size: cover; background-position: center top;">
                <span class="mask bg-gradient-success opacity-8"></span>
            <base-nav class="navbar-top navbar-horizontal navbar-dark"
                  :title="navTitle"
                  expand>
            <router-link slot="brand" class="navbar-brand" to="/">
                <img src="../assets/start.gif"/>
            </router-link>
            <router-link slot="brand" class="navbar-brand" to="/">
                <h1 class="text-white"> gif-dio </h1>
            </router-link>

            <template v-slot="{closeMenu}">
                <!-- Collapse header -->
                <div class="navbar-collapse-header d-md-none">
                    <div class="row">
                        <div class="col-6 collapse-brand">
                            <router-link to="/">
                                <img src="../assets/start.jpg">
                            </router-link>
                        </div>
                        <div class="col-6 collapse-close">
                            <button type="button"
                                    @click="closeMenu"
                                    class="navbar-toggler"
                                    data-toggle="collapse"
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
                        <router-link class="nav-link nav-link-icon" to="/login">
                            <i class="ni ni-single-02"></i>
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
        <!-- Header container -->
    </base-header>
    <div containerClasses="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavLayout',
  data () {
    return {
      navTitle: 'gif-dio-search'
    }
  },
  components: {
  }
}

</script>
<style>
</style>
