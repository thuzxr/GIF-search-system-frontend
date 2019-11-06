<template>
  <div>
    <base-header class="header pb-md-4 pt-md-6 pt-3 d-flex align-items-center"
        style="background-position: center top;">
        <!-- Mask -->
        <span class="mask bg-gradient-success opacity-12"></span>
        <!-- Header container -->
        <div class="container-fluid">
            <div class="row justify-content-around">
                <div class="col-10 text-center">
                    <h1 class="display-2 text-white">Recommend</h1>
                    <p class="text-white mt-0 mb-5">You can get many interesting gifs here! They are recommended according to your favourite gifs.</p>
                </div>
            </div>
        </div>
    </base-header>
    <div class="container">
    <div class="row justify-content-center mt-5">
      <div class="col-xl-6 col-md-8 col-10 mb-7 mb-xl-9" v-show="noImg">
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
import ImgGallery from '../components/ImgGallery.vue'

export default {
  name: 'Recommend',
  data () {
    return {
      imgList: [],
      imgName: '4fd32a6fae93404a956129260ec0a606',
      err: false
    }
  },
  computed: {
    noImg () {
      return (this.err || !this.imgList || this.imgList.length === 0)
    }
  },
  methods: {
    recommend: function () {
      this.$api.recommend(this.imgName).then(response => {
        if (response.status === 'succeed') {
          this.err = false
          var list = response.result
          this.imgList = list.map(function (item) {
            var t = {
              title: item.Title,
              url: item.Oss_url,
              thumbnail: item.Oss_url
            }
            return t
          })
        } else {
          this.err = true
          this.imgList = [{
            title: 'Oops! 找不到你想要的Gif',
            url: '../assets/timg.jpg',
            thumbnail: '../assets/timg.jpg'
          }]
        }
      })
    }
  },
  components: {
    'img-gallery': ImgGallery
  }
}

</script>
<style>
</style>
