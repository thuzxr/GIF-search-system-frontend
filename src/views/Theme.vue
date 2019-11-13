<template>
  <div>
     <base-header class="header pt-6 d-flex align-items-center"
        style="background-position: center top;">
        <!-- Mask -->
        <span :class="'mask bg-gradient-' + color +' opacity-8'"></span>
        <!-- Header container -->
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-12 text-center">
                    <h1 class="display-2 text-white">Theme</h1>
                    <p class="text-white mt-0 mb-5">This is the theme page. You can change the primary color here!</p>
                </div>
            </div>
        </div>
      </base-header>
      <div class="container-fluid mt-5 mb-5">
          <div class="row justify-content-center">
              <div class="col-xl-8 col-lg-10 col-md-10 mb-5 mb-xl-0">
                    <card shadow type="secondary">
                        <div slot="header" class="bg-white border-0">
                            <div class="row align-items-center">
                                <div class="col-12">
                                    <h3 class="mb-0">Theme Color</h3>
                                </div>
                            </div>
                        </div>
                        <template>
                            <form @submit.prevent>
                              <div class="row justify-content-around mt-3 mb-3">
                                <div class="col-lg-4 col-6">
                                    <div class="text-center">
                                      <base-button type="primary" class="my-4 bg-orange border-0 col-8" @click.stop="change('orange')">orange</base-button>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-6">
                                    <div class="text-center">
                                      <base-button type="primary" class="my-4 bg-purple border-0 col-8" @click.stop="change('purple')">purple</base-button>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-6">
                                    <div class="text-center">
                                      <base-button type="primary" class="my-4 bg-green border-0 col-8" @click.stop="change('green')">green</base-button>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-6">
                                    <div class="text-center">
                                      <base-button type="primary" class="my-4 bg-red border-0 col-8" @click.stop="change('red')">crimson</base-button>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-6">
                                    <div class="text-center">
                                      <base-button type="primary" class="my-4 bg-light border-0 col-8" @click.stop="change('light')">light</base-button>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-6">
                                    <div class="text-center">
                                      <base-button type="primary" class="my-4 bg-dark border-0  col-8" @click.stop="change('dark')">dark</base-button>
                                    </div>
                                </div>
                              </div>
                            </form>
                        </template>
                    </card>
              </div>
            </div>
      </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'Theme',
  data () {
    return {
      title: '',
      tag: '',
      tag1: '',
      tag2: '',
      label: ''
    }
  },
  computed: mapState({
    color: state => state.themeColor
  }),
  methods: {
    change: function (color) {
      this.$store.commit('setColor', color)
    }
  }
}

</script>
<style>
</style>
