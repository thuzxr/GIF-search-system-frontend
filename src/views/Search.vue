<template>
  <div>
    <div style="margin-top: 30px;">
      <search-input @doSearch="search"></search-input>
      <h2 v-show="err"> Oops! 找不到你想要的Gif </h2>
      <img-gallery v-bind:imgList="imgList"></img-gallery>
    </div>
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
  methods: {
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
              thumbnail: item.Oss_url
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
