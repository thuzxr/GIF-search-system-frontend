<template>
  <div>
    <div>
      <el-input placeholder="请输入内容" v-model="text" class="searchClass">
        <el-button slot="append" icon="el-icon-search" @click="search">
        </el-button>
      </el-input>
    </div>
    <div>
      <button @click="search">搜索</button>
    </div>
    <div>
      <p>{{ImgTitle}}</p>
    </div>
    <div>
      <img :src="ImgSrc" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import picStart from '@/assets/start.gif'
import picNotfind from '@/assets/timg.jpg'
import page from '@/components/page'
axios.defaults.timeout = 5000

export default {
  data () {
    return {
      currentPage: 1,
      pagesize: 10,
      imgList: ['http://photocdn.sohu.com/20150605/mp17789131_1433477044749_5.gif',
        'http://photocdn.sohu.com/20150605/mp17789131_1433477044749_5.gif'],
      text: '',
      ImgSrc: picStart,
      ImgTitle: '点击按钮开始搜索',
      item: 1,
      total: 30
    }
  },
  methods: {
    search: function () {
      // var tmp = 'arr[0]' + this.arr[0]
      console.log('123123')
      axios.get('http://127.0.0.1:8000/search?key=' + this.text).then(response => {
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
      /*
      this.ImgSrc = picNotfind
      this.ImgTitle = 'Oops! 找不到你想要的Gif' */
    },
    getImgList (arr) {
      var tmp = 'arr[0] ' + arr[0]
      console.log(tmp)
      console.log('123123')
      this.pageNum = arr[0]
      if (arr[1]) {
        this.item = arr[1]
      }
    }
  },
  components: {
    page: page
  }
}
</script>

<style>
  .searchClass{
    border: 1px solid #c5c5c5;
    border-radius: 20px;
    background: #f4f4f4;
    width: 600px;
  }
  .searchClass .el-input-group__prepend {
    border: none;
    background-color: transparent;
    padding: 0 10px 0 30px;
  }
  .searchClass .el-input-group__append {
    border: none;
    background-color: transparent;
  }
  .searchClass .el-input__inner {
    height: 36px;
    line-height: 36px;
    border: none;
    background-color: transparent;
  }
  .searchClass .el-icon-search{
    font-size: 20px;
  }
  .searchClass .centerClass {
    height: 100%;
    line-height: 100%;
    display: inline-block;
    vertical-align: middle;
    text-align: right;
  }
  .searchClass .line {
    width: 1px;
    height: 26px;
    background-color: #c5c5c5;
    margin-left: 14px;
  }
  .searchClass:hover{
    border: 1px solid #D5E3E8;
    background: #fff;
  }
  .searchClass:hover .line {
    background-color: #D5E3E8;
  }
  .searchClass:hover .el-icon-search{
    color: #409eff;
    font-size: 16px;
  }
</style>
