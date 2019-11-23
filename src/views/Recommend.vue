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
          <div class="row">
            <div class="col-6">
              <i class="ni ni-satisfied text"
                :class="[isliked ? 'text-red': 'text-blue']"
                @click.stop="like"></i>
            </div>
            <div class="col-6">
              <i class="ni ni-favourite-28 text"
                :class="[isfavoured ? 'text-red': 'text-blue']"
                @click="favour"></i>
            </div>
          </div>
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
    like: function () {
      this.isliked = !this.isliked
      this.$store.commit('likeImg', this.modalImg.name)
    },
    favour: function () {
      this.isfavoured = !this.isfavoured
      this.$store.commit('favourImg', this.modalImg.name)
      this.$api.addFavour(this.modalImg.name).then(res => {
        this.$notify(res.status, 'success')
      }).catch(err => {
        alert(err)
        console.log(err)
      })
    },
    clickImg: function (img) {
      this.modalImg = img
      console.log('in recommand click: ' + img.title)
      this.isliked = this.$store.state.likeList.has(img.name)
      this.isfavoured = this.$store.state.favourList.has(img.name)
      this.showModal(true)
    },
    showModal: function (visibility) {
      this.modalShow = visibility
    },
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
