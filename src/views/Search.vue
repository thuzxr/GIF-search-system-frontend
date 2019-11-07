<template>
  <div class="container">
  <div class="row justify-content-around mt-3"
       :class="[noImg ? 'mt-lg-9 mt-md-7 mt-sm-5': 'mt-lg-5 mt-md-4']">
      <search-input @doSearch="search"></search-input>
      <h2 v-show="err"> Oops! 找不到你想要的Gif </h2>
  </div>
  <img-gallery v-bind:imgList="imgList"></img-gallery>
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
      err: false
    }
  },
  computed: {
    noImg () {
      return (this.err || !this.imgList || this.imgList.length === 0)
    }
  },
  methods: {
    search: function (text) {
      this.$api.search(text).then(response => {
        console.log(response.result)
        if (response.status === 'succeed') {
          this.err = false
          var list = response.result
          // console.log(list[0])
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
