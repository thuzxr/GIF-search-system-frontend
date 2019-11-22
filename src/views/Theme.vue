<template>
  <div>
     <base-header class="header pt-2 d-flex align-items-center"
        style="background-position: center top;">
        <!-- Mask -->
        <span :class="'mask bg-gradient-' + color +' opacity-8'"></span>
        <!-- Header container -->
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-12 text-center">
                    <h1 class="display-2 text-white">Settings</h1>
                    <p class="text-white mt-0 mb-5">This is the setting page. You can change theme and search params here!</p>
                </div>
            </div>
        </div>
      </base-header>
      <div class="container-fluid mt-5 mb-5">
        <div class="row justify-content-center mb-5">
              <div class="col-xl-8 col-lg-10 col-md-10 mb-5 mb-xl-0">
                    <card shadow type="secondary">
                        <div slot="header" class="bg-white border-0">
                            <div class="row align-items-center">
                                <div class="col-12">
                                    <h3 class="mb-0">搜索参数设置</h3>
                                </div>
                            </div>
                        </div>
                        <h3> 搜索结果过滤强度 </h3>
                        <vue-slider class="my-4"
                                    v-model="value"
                                    :min="0"
                                    :max="1"
                                    :interval="0.01"
                                    :lazy="true"
                                    @change="setvalue"></vue-slider>
                        <hr class="my-4" />
                        <div class="row justify-content-around mt-3 mb-3">
                          <div class="col-lg-6 col-12 order-1">
                            <h3> 搜索类型 </h3>
                          </div>
                          <div class="col-lg-6 col-12 order-lg-3 order-2">
                              <div class="btn-group">
                                <base-button :type="searchType === 'L' ? 'white' : 'success'" class="my-4 border-0" @click.stop="setSearchType('H')">模糊搜索</base-button>
                                <base-button :type="searchType === 'H' ? 'white' : 'success'" class="my-4 border-0" @click.stop="setSearchType('L')">简单搜索</base-button>
                              </div>
                          </div>
                          <div class="col-lg-6 col-12 order-lg-2 order-3">
                            <h3> 结果排序 </h3>
                          </div>
                          <div class="col-lg-6 col-12 order-4">
                              <div class="btn-group">
                                <base-button :type="rankType === 'Sim' ? 'white' : 'success'" class="my-4 border-0" @click.stop="setRankType('Heat')">按热度排序</base-button>
                                <base-button :type="rankType === 'Heat' ? 'white' : 'success'" class="my-4 border-0" @click.stop="setRankType('Sim')">相似度排序</base-button>
                              </div>
                          </div>
                        </div>
                    </card>
              </div>
            </div>
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
                          <div class="row justify-content-around mt-3 mb-3">
                            <div class="col-lg-4 col-6">
                                <div class="text-center">
                                  <base-button type="primary" class="my-4 bg-orange border-0 col-md-9 col-10" @click.stop="change('orange')">orange</base-button>
                                </div>
                            </div>
                            <div class="col-lg-4 col-6">
                                <div class="text-center">
                                  <base-button type="primary" class="my-4 bg-purple border-0 col-md-9 col-10" @click.stop="change('purple')">purple</base-button>
                                </div>
                            </div>
                            <div class="col-lg-4 col-6">
                                <div class="text-center">
                                  <base-button type="primary" class="my-4 bg-green border-0 col-md-9 col-10" @click.stop="change('green')">green</base-button>
                                </div>
                            </div>
                            <div class="col-lg-4 col-6">
                                <div class="text-center">
                                  <base-button type="primary" class="my-4 bg-red border-0 col-md-9 col-10" @click.stop="change('red')">crimson</base-button>
                                </div>
                            </div>
                            <div class="col-lg-4 col-6">
                                <div class="text-center">
                                  <base-button type="primary" class="my-4 bg-light border-0 col-md-9 col-10" @click.stop="change('light')">light</base-button>
                                </div>
                            </div>
                            <div class="col-lg-4 col-6">
                                <div class="text-center">
                                  <base-button type="primary" class="my-4 bg-dark border-0 col-md-9 col-10" @click.stop="change('dark')">dark</base-button>
                                </div>
                            </div>
                          </div>
                    </card>
              </div>
            </div>
      </div>
  </div>
</template>

<script>

import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'

import { mapState } from 'vuex'

export default {
  name: 'Theme',
  data () {
    return {
      value: 0.5
    }
  },
  computed: mapState({
    color: state => state.themeColor,
    searchType: state => state.searchType,
    rankType: state => state.rankType
  }),
  methods: {
    change: function (color) {
      this.$store.commit('setColor', color)
    },
    setvalue: function (val) {
      this.$store.commit('setFilterThreshold', val)
    },
    setSearchType: function (type) {
      this.$store.commit('setSearchType', type)
    },
    setRankType: function (type) {
      this.$store.commit('setRankType', type)
      console.log('set rank type')
    }
  },
  components: {
    VueSlider
  },
  mounted: function () {
    this.value = this.$store.state.filterThreshold / 10
  }
}

</script>
<style>
</style>
