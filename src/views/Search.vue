<template>
  <div class="container" @keyup.esc="showModal(false)">
  <div class="row justify-content-around mt-3"
       :class="[noImg ? 'mt-lg-9 mt-md-7 mt-9': 'mt-lg-5 mt-md-4']">
      <search-input @doSearch="search"></search-input>
  </div>
  <div class="row justify-content-around mt-3">
      <h2 v-show="err"> Oops! 找不到你想要的Gif </h2>
  </div>
  <!-- <div class="row justify-content-around mt-3">
      <img src="../assets/dio.jpg" @click.stop="clickImg({name:'dio brando', url:'../assets/dio.jpg', title: 'dio brando'})">
  </div> -->
  <img-gallery v-bind:imgList="imgList" v-if="!err" :pop="logined" @clickImg="clickImg"></img-gallery>

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
</template>
<script>
import SearchInput from '../components/SearchInput.vue'
import ImgGallery from '../components/ImgGallery.vue'
import { mapState } from 'vuex'

export default {
  name: 'Search',
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
  computed: mapState({
    noImg (state) {
      return (this.err || !this.imgList || this.imgList.length === 0)
    },
    logined: state => (state.user.perm !== '0')
  }),
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
      })
    },
    clickImg: function (img) {
      this.modalImg = img
      this.isliked = this.$store.state.likeList.has(img.name)
      this.isfavoured = this.$store.state.favourList.has(img.name)
      this.showModal(true)
    },
    showModal: function (visibility) {
      this.modalShow = visibility
    },
    search: function (text) {
      this.$api.search(text).then(response => {
        if (response.status === 'succeed') {
          this.err = false
          var list = response.result
          for (let item of list) {
            item.Oss_url = item.Oss_url.slice(0, 4) + 's' + item.Oss_url.slice(4)
          }
          this.imgList = list.map(function (item) {
            var t = {
              title: item.Title,
              url: item.Oss_url,
              thumbnail: item.Oss_url,
              name: item.Name
            }
            return t
          })
        } else {
          this.err = true
          this.imgList = []
          this.$notify('Oops! 找不到你想要的Gif', 'info')
        }
      }).catch(err => {
        this.$notify(err.message, 'warning')
      })
    }
  },
  components: {
    'search-input': SearchInput,
    'img-gallery': ImgGallery
  }
}

</script>
<style>

</style>
