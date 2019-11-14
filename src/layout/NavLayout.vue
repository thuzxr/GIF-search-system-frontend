<template>
  <div class="main-content">
            <notifications></notifications>
          <base-header class="header d-flex align-items-center"
                 style="min-height: 88px; background-size: cover; background-position: center top;">
                <span :class="'mask bg-gradient-' + color +' opacity-8'"></span>
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
                <ul class="navbar-nav ml-auto" v-if="!logined">
                    <li class="nav-item">
                        <router-link class="nav-link nav-link-icon" to="/login">
                            <i class="ni ni-single-02"></i>
                            <span class="nav-link-inner--text">Login</span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link nav-link-icon" to="/register">
                            <i class="ni ni-single-02"></i>
                            <span class="nav-link-inner--text">Register</span>
                        </router-link>
                    </li>
                </ul>

                <ul class="navbar-nav ml-auto mt--2" v-if="logined">
                    <li class="nav-item" v-if="!isAdmin">
                        <div class="row align-items-center">
                            <div class="col">
                            <router-link class="nav-link nav-link-icon" to="/profile">
                                <span class="avatar avatar-sm rounded-circle">
                                    <img src="../assets/dio.jpg">
                                </span>
                                </router-link>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item align-items-center" v-if="isAdmin">
                        <router-link class="nav-link nav-link-icon  mt-2" to="/manage">
                            <i class="ni ni-chart-bar-32"></i>
                            <span class="nav-link-inner--text">Dashboard</span>
                        </router-link>
                    </li>
                    <li class="nav-item align-items-center">
                        <div class="nav-link nav-link-icon mt-2" @click="logout">
                            <i class="ni ni-single-02"></i>
                            <span class="nav-link-inner--text">logout</span>
                        </div>
                    </li>
                </ul>
            </template>
        </base-nav>
        <!-- Header container -->
    </base-header>
      <router-view></router-view>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'NavLayout',
  data () {
    return {
      navTitle: 'gif-dio-search'
    }
  },
  components: {
  },
  computed: mapState({
    logined: state => (!(state.user.perm === '0')),
    isAdmin: state => (state.user.perm === '2'),
    color: state => (state.user.perm === '2' ? 'purple': state.themeColor)
  }),
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  }
}

</script>
<style>
</style>
