<template>
  <div>
    <p v-show="err"> Oops! 找不到你想要的Gif </p>
    <img-gallery v-bind:imgList="imgList"></img-gallery>
  </div>
</template>
<script>
import ImgGallery from '../components/ImgGallery.vue'

export default {
  name: 'Recommend',
  data () {
    return {
      imgList: [],
      imgName: '4fd32a6fae93404a956129260ec0a606',
      err: false
    }
  },
  mounted () {
    this.$api.recommend(this.imgName).then(response => {
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
      } else {
        this.err = true
        this.imgList = [{
          title: 'Oops! 找不到你想要的Gif',
          url: '../assets/timg.jpg',
          thumbnail: '../assets/timg.jpg'
        }]
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
