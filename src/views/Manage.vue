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
                    <h1 class="display-2 text-white">Manage</h1>
                    <p class="text-white mt-0 mb-5">This is upload page. You can share you favourite gif to others!</p>
                </div>
            </div>
        </div>
      </base-header>
      <div class="container">
      <div class="row justify-content-center mt-xl-9 mt-lg-9 mt-md-7 mt-sm-5 mb-xl-9 mb-lg-9 mb-md-7 mb-sm-5 ">
        <div class="col-xl-6 col-md-8 col-10">
          <div class="card card-profile shadow">
            <div class="card-body pt-0 pt-4">
              <div class="text-center pt-1">
                <h4>You dont have any recommend gif yet~ </h4>
                <div class="text-center">
                  <base-button type="vue" class="my-0" @click.stop="recommend">get some</base-button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img-gallery v-bind:imgList="imgList"></img-gallery>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ImgGallery from '../components/ImgGallery.vue'

export default {
  name: 'Manage',
  data () {
    return {
      imgList: []
    }
  },
  computed: mapState({
    color: state => 'purple'
  }),
  methods: {
  },
  components: {
    'img-gallery': ImgGallery
  }
}

</script>
<style>
</style>
