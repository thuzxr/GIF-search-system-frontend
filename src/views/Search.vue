<template>
  <div class="container">
  <div class="row justify-content-around mt-3"
       :class="[noImg ? 'mt-lg-9 mt-md-7 mt-sm-5': 'mt-lg-5 mt-md-4']">
      <search-input @doSearch="search"></search-input>
  </div>
  <div class="row justify-content-around mt-3">
      <h2 v-show="err"> Oops! 找不到你想要的Gif </h2>
  </div>
  <img-gallery v-bind:imgList="imgList" v-if="!err" :pop="logined" @clickImg="clickImg"></img-gallery>

    <modal :show="modalImg" @update:show="showModal">
    <h4 slot="header">{{ modalImg.title }}</h4>

    <div>
      <div class="row justify-content-center">
        <img :src="modalImg.url" style="max-height:300px;">
      </div>
      <hr class="my-4" />
      <div class="row mt-3 align-items-center justify-content-between">
        <div class="col-6">
          <div class="media align-items-center" slot="title">
            <span class="avatar avatar-sm rounded-circle">
              <img src="../assets/dio.jpg">
            </span>
            <span class="mb-0 ml-2 text-primary font-weight-bold">dio brando</span>
          </div>
        </div>
        <div class="col-3">
          <div class="row">
            <div class="col-4">
              <i class="ni ni-satisfied dropdown-item-text text-red"></i>
            </div>
            <div class="col-4">
              <i class="ni ni-favourite-28 dropdown-item-text text-red"></i>
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
      }
    }
  },
  computed: {
    noImg () {
      return (this.err || !this.imgList || this.imgList.length === 0)
    },
    logined () {
      return this.$store.state.user.perm !== '0'
    }
  },
  methods: {
    clickImg: function (img) {
      this.modalImg = img
      this.showModal(true)
    },
    showModal: function (visibility) {
      this.modalShow = visibility
    },
    search: function (text) {
      this.$api.search(text).then(response => {
        console.log(response.result)
        if (response.status === 'succeed') {
          this.err = false
          var list = response.result
          this.imgList = list.map(function (item) {
            var t = {
              title: item.Title,
              url: item.Oss_url,
              thumbnail: item.Oss_url,
              name: item.Name
            }
            return t
          })
          console.log(list[0])
        } else {
          this.err = true
          this.imgList = []
          this.$notify('Oops! 找不到你想要的Gif', 'info')
        }
      }).catch(res => {
        alert(res)
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
