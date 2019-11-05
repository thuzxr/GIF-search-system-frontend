<template>
    <nav class="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white" id="sidenav-main">
        <div class="container-fluid">

            <!--Toggler-->
            <navbar-toggle-button @click.native="showSidebar">
                <span class="navbar-toggler-icon"></span>
            </navbar-toggle-button>
            <router-link class="navbar-brand-img" to="/">
                <h1>gif-dio</h1>
            </router-link>

            <slot name="mobile-right">
                <ul class="nav align-items-center d-md-none">
                    <base-dropdown class="nav-item" position="right">
                        <a slot="title" class="nav-link" href="#" role="button">
                            <div class="media align-items-center">
                              <span class="avatar avatar-sm rounded-circle">
                                <img src="../../assets/dio.jpg">
                              </span>
                            </div>
                        </a>

                        <div class=" dropdown-header noti-title">
                          <h6 class="text-overflow m-0">Welcome!</h6>
                        </div>
                        <router-link to="/profile" class="dropdown-item-text">
                          <i class="ni ni-single-02"></i>
                          <span>My profile</span>
                        </router-link>
                        <router-link to="/profile" class="dropdown-item-text">
                          <i class="ni ni-settings-gear-65"></i>
                          <span>Settings</span>
                        </router-link>
                        <div class="dropdown-divider"></div>
                        <router-link to="/profile" class="dropdown-item-text">
                          <i class="ni ni-user-run"></i>
                          <span>Logout</span>
                        </router-link>
                    </base-dropdown>
                </ul>
            </slot>
            <slot></slot>
            <div v-show="$sidebar.showSidebar" class="navbar-collapse collapse show" id="sidenav-collapse-main">

                <div class="navbar-collapse-header d-md-none">
                    <div class="row">
                        <div class="col-6 collapse-brand">
                            <router-link to="/">
                                <img :src="logo">
                            </router-link>
                        </div>
                        <div class="col-6 collapse-close">
                            <navbar-toggle-button @click.native="closeSidebar"></navbar-toggle-button>
                        </div>
                    </div>
                </div>

                <hr class="my-3">
                <ul class="navbar-nav">
                    <slot name="links">
                    </slot>
                </ul>
            </div>
            </div>
    </nav>
</template>
<script>
import NavbarToggleButton from '@/components/NavbarToggleButton'
import logo from '@/assets/start.jpg'

export default {
  name: 'sidebar',
  data () {
    return {
      logo: logo
    }
  },
  components: {
    NavbarToggleButton
  },
  props: {
    autoClose: {
      type: Boolean,
      default: true,
      description: 'Whether sidebar should autoclose on mobile when clicking an item'
    }
  },
  provide () {
    return {
      autoClose: this.autoClose
    }
  },
  methods: {
    closeSidebar () {
      this.$sidebar.displaySidebar(false)
    },
    showSidebar () {
      this.$sidebar.displaySidebar(true)
    }
  },
  beforeDestroy () {
    if (this.$sidebar.showSidebar) {
      this.$sidebar.showSidebar = false
    }
  }
}
</script>
