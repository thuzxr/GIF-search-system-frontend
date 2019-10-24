<template>
  <div>
    <img-gallery v-bind:imgList="imgList"></img-gallery>
  </div>
</template>
<script>
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
      imgName: '4fd32a6fae93404a956129260ec0a606',
      item: 1,
      total: 30,
      text: ''
    }
  },
  mounted () {
    axios.get('https://gif-dio-go-stardustcrusaders.app.secoder.net/recommend?name=' + this.imgName).then(response => {
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
        // this.ImgSrc = picNotfind
        this.ImgTitle = 'Oops! 找不到你想要的Gif'
      }
    })
  },
  methods: {

  },
  components: {
    'img-gallery': ImgGallery
  }
}

</script>
<style>
</style>
