<template>
  <div>
    <base-header class="header pb-md-4 pt-md-6 pt-3 d-flex align-items-center"
        style="background-position: center top;">
        <!-- Mask -->
        <span :class="'mask bg-gradient-' + color +' opacity-8'"></span>
        <!-- Header container -->
        <div class="container-fluid">
            <div class="row justify-content-around">
                <div class="col-10 text-center">
                    <h1 class="display-2 text-white">Favourites</h1>
                    <p class="text-white mt-0 mb-5">Your favoured gifs are displayed here!</p>
                </div>
            </div>
        </div>
    </base-header>
    <div class="container">
    <div class="row justify-content-center mt-xl-9 mt-lg-9 mt-md-7 mt-sm-5 mb-xl-9 mb-lg-9 mb-md-7 mb-sm-5 ">
      <div class="col-xl-6 col-md-8 col-10" v-show="noImg">
        <div class="card card-profile shadow">
          <div class="card-body pt-0 pt-4">
            <div class="text-center pt-1">
              <h4>You have not favoured any gif yet~ </h4>
            </div>
          </div>
        </div>
      </div>
      <img-gallery v-bind:imgList="imgList" :pop="true" @clickImg="clickImg"></img-gallery>
        <modal :show="modalShow" @update:show="showModal">
          <h4 slot="header">{{ modalImg.title }}</h4>

          <div>

          </div>
        </modal>
    </div>
    </div>
  </div>
</template>
<script>
import ImgGallery from '../components/ImgGallery.vue'
// import store from '@/store'

export default {
  name: 'Recommend',
  data () {
    return {
      imgList: [],
      err: false,
      modalShow: false,
      modalImg: {
        name: '',
        url: '',
        title: ''
      }
    }
  },
  computed: {
    noImg () {
      return (this.err || !this.imgList || this.imgList.length === 0)
    },
    color () {
      return this.$store.state.themeColor
    }
  },
  methods: {
    clickImg: function (img) {
      this.modalImg = img
      this.showModal(true)
    },
    showModal: function (visibility) {
      this.modalShow = visibility
    }
  },
  components: {
    'img-gallery': ImgGallery
  },
  created: function () {

  }
}

</script>
<style>
</style>
