<template>
  <div>
    <top-nav-bar></top-nav-bar>
    <p>recommend...</p>
    <img-gallery v-bind:imgList="imgList"></img-gallery>
  </div>
</template>
<script>
import TopNavBar from '../components/TopNavBar.vue'
import ImgGallery from '../components/ImgGallery.vue'

import axios from 'axios'
axios.defaults.timeout = 5000
export default {
  name: 'Recommend',
  data () {
    return {
      currentImg: 3,
      currentPage: 1,
      pagesize: 10,
      imgList: [],
      imgName: '13a29d7df01e08d84f5ed3690db02b72',
      item: 1,
      total: 30,
      text: ''
    }
  },
  mounted () {
     axios.get('https://gif-dio-stardustcrusaders.app.secoder.net/query?name=' + this.imgName).then(response => {
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
  },
  methods: {

  },
  components: {
    'top-nav-bar': TopNavBar,
    'img-gallery': ImgGallery
  }
}

</script>
<style>
</style>
