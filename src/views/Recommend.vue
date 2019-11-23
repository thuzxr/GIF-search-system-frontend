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
                    <h1 class="display-2 text-white">Recommend</h1>
                    <p class="text-white mt-0 mb-5">You can get many interesting gifs here! They are recommended according to your favourite gifs.</p>
                </div>
            </div>
        </div>
    </base-header>
    <div class="container">
    <div class="row justify-content-center"
        :class="[noImg ? ' my-xl-9 my-lg-9 my-md-7 my-sm-5 my-3' : 'my-5' ]">
      <div class="col-xl-6 col-md-8 col-10" v-show="noImg">
        <div class="card card-profile shadow">
          <div class="card-body pt-0 pt-4">
            <div class="text-center pt-1">
              <h4>You dont have any recommend gif yet~ </h4>
              <div class="text-center">
                <base-button type="vue" class="my-0 btn" @click.stop="recommend">get some</base-button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img-gallery v-bind:imgList="imgList" v-if="!noImg" :pop="false"></img-gallery>

    </div>
    </div>
  </div>
</template>
<script>
import ImgGallery from '../components/ImgGallery.vue'
import store from '@/store'

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
      },
      isliked: false,
      isfavoured: false
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
    recommend: function () {
      var imgName = store.state.lastClick.name
      this.$api.recommend(imgName).then(response => {
        if (response.status === 'succeed' && response.result) {
          this.err = false
          var list = response.result
          for (let item of list) {
            item.Oss_url = item.Oss_url.slice(0, 4) + 's' + item.Oss_url.slice(4)
          }
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
          this.$notify('没有找到相似的图片~', 'info')
        }
      }).catch(err => {
        alert(err)
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
