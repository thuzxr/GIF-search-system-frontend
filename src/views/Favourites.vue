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
    <div class="row justify-content-end" v-show="!noImg">
      <div class="col-4">
          <div class="text-center">
            <base-button type="white" class="mt-2 ml-md-6 ml-lg-8 btn shadow-0">clear</base-button>
          </div>
      </div>
    </div>
    <div class="row justify-content-center mt-xl-9 mt-lg-9 mt-md-7 mt-sm-5 mt-3 mb-xl-9 mb-lg-9 mb-md-7 mb-sm-5 mt-3">
      <div class="col-xl-6 col-md-8 col-10" v-show="noImg">
        <div class="card card-profile shadow">
          <div class="card-body pt-0 pt-4">
            <div class="text-center pt-1">
              <h4>You have not favoured any gif yet~ </h4>
            </div>
          </div>
        </div>
      </div>
      <img-gallery v-bind:imgList="imgList" :pop="true" @clickImg="clickImg" v-show="!noImg"></img-gallery>
        <modal :show="modalShow" @update:show="showModal">
          <h4 slot="header">{{ modalImg.title }}</h4>

              <div>
      <div class="row justify-content-center">
        <img :src="modalImg.url" style="max-height:300px; max-width: 90%">
        <!-- <img src="../assets/start.jpg" style="max-height:300px; max-width: 90%;"> -->
      </div>
      <hr class="my-4" />
      <div class="row mt-3 align-items-center justify-content-between">
        <div class="col-6">
          <div class="media align-items-center" slot="title">
            <span class="avatar">
              <img src="../assets/dio.jpg">
            </span>
            <span class="mb-0 ml-2 text-primary font-weight-bold">dio brando</span>
          </div>
        </div>
        <div class="col-3">
          <base-button type="white" class="mt-2 ml-md-6 ml-lg-8 btn shadow-0">remove</base-button>
        </div>
      </div>
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
    this.$api.getFavourList().then(res => {
      console.log('in favourite: ', res)
      if (res.result) {
        this.err = false
        this.imgList = res.result.map(function (item) {
          var t = {
            title: item.Title,
            url: item.Oss_url,
            thumbnail: item.Oss_url,
            name: item.Name
          }
          return t
        })
        console.log('in get favour: ', this.imgList[0])
      } else {
        this.err = true
        this.$store.commit('clearFavourList')
      }
    }).catch(err => {
      console.log(err)
    })
  }
}

</script>
<style>
</style>
