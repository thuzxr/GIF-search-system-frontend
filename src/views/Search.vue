<template>
  <div>
    <TopNavBar></TopNavBar>
    <SearchInput @doSearch='search'></SearchInput>
    <div>
      <p>{{ImgTitle}}</p>
    </div>
    <div style="width=30%;height=50%;margin:auto"><!-- 不太对-->
      <img :src="ImgSrc" /><!---->
    </div>
<!--    <div style="width:50%;margin:auto" >
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="6">
          <img style="width:100%;height:auto" :src="imgList[0]" />
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
    </div> -->
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
          this.ImgSrc = response.data.result[0].Oss_url
          this.ImgTitle = response.data.result[0].Title
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
  .gifLayout{
    width: 50%;
  }

  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
