<template>
  <div>
    <TopNavBar></TopNavBar>
    <p>recommend...</p>
   
  </div>
</template>

<script>
import TopNavBar from '../components/TopNavBar.vue'

import axios from 'axios'
axios.defaults.timeout = 5000
export default {
  name: 'Recommend',
  data () {
    imgList: []
  },
  mounted () {
    /*axios.get('https://gif-dio-stardustcrusaders.app.secoder.net/query?key=' + text).then(response => {
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
      })*/
  },
  methods: {
    
  },
  components: {
    TopNavBar
  }
}
</script>

<style>
</style>
