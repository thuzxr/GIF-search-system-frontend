<template>
  <div>
    <top-nav-bar></top-nav-bar>
    <div style="margin-top: 30px;">
      <search-input @doSearch="search"></search-input>
      <img-gallery v-bind:imgList="imgList"></img-gallery>
    </div>
  </div>
</template>
<script>
import picNotfind from '@/assets/timg.jpg'
import SearchInput from '../components/SearchInput.vue'
import TopNavBar from '../components/TopNavBar.vue'
import ImgGallery from '../components/ImgGallery.vue'

import axios from 'axios'
axios.defaults.timeout = 5000

export default {
  name: 'Search',
  data () {
    return {
      currentImg: 3,
      currentPage: 1,
      pagesize: 10,
      imgList: [],
      item: 1,
      total: 30
    }
  },
  methods: {
    search: function (text) {
      axios.get('https://gif-dio-stardustcrusaders.app.secoder.net/query?key=' + text).then(response => {
        console.log(response.data)
        if (response.data.status === 'succeed') {
          var list = response.data.result
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
          this.ImgSrc = picNotfind
          this.ImgTitle = 'Oops! 找不到你想要的Gif'
        }
      })
    }
  },
  components: {
    'search-input': SearchInput,
    'top-nav-bar': TopNavBar,
    'img-gallery': ImgGallery
  }
}

</script>
<style>

</style>
