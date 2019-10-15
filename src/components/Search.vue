<template>
  <div>
    <div>
      <input v-model="text">
    </div>
    <div >
      <button v-on:click="search">搜索</button>
    </div>
    <div >
      <p>{{ImgTitle}}</p>
    </div>
    <div >
      <img :src="ImgSrc">
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import picStart from '@/assets/start.gif'
import picNotfind from '@/assets/timg.jpg'
axios.defaults.timeout = 5000

export default {
  data () {
    return {
      text: '',
      ImgSrc: picStart,
      ImgTitle: '点击按钮开始搜索'
    }
  },
  methods: {
    search: function () {
      axios.get('https://gif-dio-stardustcrusaders.app.secoder.net/query?key=' + this.text).then(response => {
        console.log(response)
        if (response.data.status === 'succeed') {
          this.ImgSrc = response.data.result[0].Oss_url
          this.ImgTitle = response.data.result[0].Title
        } else {
          this.ImgSrc = picNotfind
          this.ImgTitle = 'Oops! 找不到你想要的Gif'
        }
      })
      console.log(this.text)
    }
  }
}
</script>
