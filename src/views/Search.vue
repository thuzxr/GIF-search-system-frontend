<template>
  <div>
    <TopNavBar></TopNavBar>
    <div style="margin-top: 30px;">
    <SearchInput @doSearch='search'></SearchInput>
    <v-gallery :images="imgList" class="image-box">
            <a href="javascript:void(0);"
               :data-image="img.url"
               :title="img.title"
               v-for="img in imgList" :key="img.title">
                <div class="bgbox">
                    <img :src="img.url">
                </div>
            </a>
    </v-gallery>
    </div>
  </div>
</template>

<script>

import picStart from '@/assets/start.jpg'
import picNotfind from '@/assets/timg.jpg'
import SearchInput from '../components/SearchInput.vue'
import TopNavBar from '../components/TopNavBar.vue'

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
      ImgSrc: picStart,
      ImgTitle: '',
      item: 1,
      total: 30
    }
  },
  methods: {
    search: function (text) {
      axios.get('https://gif-dio-stardustcrusaders.app.secoder.net/query?key=' + text).then(response => {
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
    SearchInput,
    TopNavBar
  }
}
</script>

<style>
    .image-box a {
      clear: both;
      display: inline-block;
      margin: 0 10px 10px 0;
      position: relative;
      text-align: center;
    }
    .image-box a .bgbox{
                background-color: #FFFFFF;
                height: 150px;
                display:table-cell;
                vertical-align:middle;
                padding: 4px;
                border-radius: 2px;
            }
    .image-box a .bgbox img{
      width: 200px;
      display: block;
      }
      .image-box a .img-title {
                bottom: 5px;
                display: block;
                text-align: center;
                color: #999999;
                padding-top: 5px;
            }
      .image-box a:hover .img-title { color: #232323; }
</style>
